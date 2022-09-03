import IconBox, { IconType } from "../../common/IconBox/IconBox";

const Footer = () => {
  return (
    <footer
      className={
        "flex w-full flex-col items-center justify-center space-y-3 bg-violet text-white"
      }
    >
      <h4>{"Teoku's tech blog"}</h4>
      <p>{"안녕하세요 테오구 입니다."}</p>
      <div className={"flex space-x-1"}>
        <IconBox iconName={IconType.annotation} />
        <IconBox iconName={IconType.bookmark} />
        <IconBox iconName={IconType.newspaper} />
        <IconBox iconName={IconType.phone} />
      </div>
    </footer>
  );
};

export default Footer;
