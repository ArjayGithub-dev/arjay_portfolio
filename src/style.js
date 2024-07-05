const styles = {

  boxWidth: "xl:max-w-[1280px] w-full",

  heading2: "font-inter font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph1: "font-inter font-extralight text-black  ss:text-[25px] text-[18px]",
  paragraph2: "font-inter font-extralight text-black text-[18px]",
  sectionTitle: "font-inter font-bold text-blue text-[20px]",
  
  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",
  
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",
  
  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export const animation = {
  ease: `duration-[1000ms] ease-[cubic-bezier(.47,0,.745,.715)] taos:opacity-0`,
  offset: `duration-[1000ms] taos:opacity-0" data-taos-offset="300"`,
  fadeRight: `delay-[300ms] duration-[600ms] taos:translate-x-[-200px] taos:opacity-0" data-taos-offset="400"`,

};

export default styles;