import { useThree } from "@react-three/fiber";
import { Scroll } from "@react-three/drei";

const HtmlScroll: React.FC = () => {
  const { size } = useThree();
  return (
    <Scroll html>
      <div
        className="bruh"
        style={{
          width: `${size.width}px`,
          height: "100vh",
        }}
      >
        <header className="bruh__header">
          <h1 className="bruh__name"> WEBSITE NAME</h1>
          <nav className="bruh__nav">
            <p className="bruh__options">Home</p>
            <p className="bruh__options">About </p>
            <p className="bruh__options">Projects </p>
          </nav>
        </header>
      </div>
    </Scroll>
  );
};
export default HtmlScroll;
