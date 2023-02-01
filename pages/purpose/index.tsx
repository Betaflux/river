import React from "react";
import Purpose from "../../components/Purpose";
import { getPurposeData } from "../../http";

const index = ({ purposeData }: any) => {
  return (
    <div>
      <Purpose purposeData={purposeData} />
    </div>
  );
};
export async function getServerSideProps() {
  const { data } = await getPurposeData();
  console.log(data.data);
  return {
    props: { purposeData: data.data }, // will be passed to the page component as props
  };
}
export default index;
