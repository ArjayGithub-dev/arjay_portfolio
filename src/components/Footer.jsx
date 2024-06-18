import styles from "../style";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className="w-full flex justify-center items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#CBCBCB]">
      <p className="font-inter font-semibold text-[18px] leading-[27px] text-gray dark:text-white text-center mt-10">
        © 2024 Arjay Malaga. All Rights Reserved.
      </p>
    </div>
  </section>
);

export default Footer;
