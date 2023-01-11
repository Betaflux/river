import { useRef, useReducer, useEffect } from "react";

enum Type {
  idle = "idle",
  loading = "loading",
  resolved = "resolved",
  rejected = "rejected",
}

interface State<T> {
  data?: T;
  type: Type;
}

type Action<T> =
  | { type: "idle" }
  | { type: "loading" }
  | { type: "resolved"; payload: T }
  | { type: "rejected"; payload: T };

const useFetch = <T = unknown,>(
  url?: string,
  options?: RequestInit
): State<T> => {
  // Used to prevent state update if the component is unmounted
  const cancelRequest = useRef<boolean>(false);

  const initialState: State<T> = {
    data: undefined,
    type: Type.idle,
  };

  // Keep state logic separated
  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case "idle":
        return { ...initialState };
      case "loading":
        return { ...initialState, type: Type.loading };
      case "resolved":
        return {
          ...initialState,
          data: action.payload,
          type: Type.resolved,
        };
      case "rejected":
        return {
          ...initialState,
          data: action.payload,
          type: Type.rejected,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    // Do nothing if the url is not given
    if (!url) return;

    cancelRequest.current = false;

    const fetchData = async () => {
      dispatch({ type: "idle" });

      dispatch({ type: "loading" });

      try {
        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = (await response.json()) as T;

        if (cancelRequest.current) return;

        dispatch({ type: "resolved", payload: data });
      } catch (error) {
        if (cancelRequest.current) return;

        dispatch({ type: "rejected", payload: error as T });
      }
    };

    fetchData();
    // eslint-disable-next-line consistent-return
    return () => {
      cancelRequest.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return state;
};

export default useFetch;
