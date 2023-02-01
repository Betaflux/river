import React from "react";
import Careers from "../../components/Careers";
import { getCareersData } from "../../http";

const index = ({ careersData }: any) => {
  return (
    <div>
      <Careers careersData={careersData} />
    </div>
  );
};
export async function getServerSideProps() {
  const { data } = await getCareersData();
  console.log(data.data);
  return {
    props: { careersData: data.data }, // will be passed to the page component as props
  };
}
export default index;
