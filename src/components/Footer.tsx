import SocialNets from "@/components/SocialNets";
export default function Footer() {
  return (
    <footer className="bg-black h-80 flex items-center justify-center">
      <div>
        <div>links de navegacion</div>
        <div>
          <SocialNets />
        </div>
      </div>
      <p>©2023 compralo</p>
    </footer>
  );
}
