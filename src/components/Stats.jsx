import styles from "../styles/style";
import CountUp from 'react-countup';

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    
    <div className={`flex-1 flex justify-start items-center flex-row m-3`}>
      <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
      <CountUp start={4105} end={4500} suffix="+" duration={3.75}/>
      </h4>
      <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
      User Active
      </p>
    </div>

    <div className={`flex-1 flex justify-start items-center flex-row m-3`}>
      <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
      <CountUp start={200} end={250} suffix="+" duration={3.75}/>
      </h4>
      <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
      Trusted by Company
      </p>
    </div>

    <div className={`flex-1 flex justify-start items-center flex-row m-3`}>
      <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
      <CountUp start={280} end={330} suffix="M+" duration={3.75}/>
      </h4>
      <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
      Transaction
      </p>
    </div>
  </section>
);

export default Stats;
