import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
      <div
        className="hero min-h-[80vh]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1393%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='url(%26quot%3b%23SvgjsLinearGradient1394%26quot%3b)'%3e%3c/rect%3e%3cpath d='M1126.801%2c326.665C1146.816%2c327.567%2c1167.836%2c320.861%2c1177.886%2c303.529C1187.961%2c286.153%2c1182.332%2c265.163%2c1172.676%2c247.55C1162.532%2c229.047%2c1147.901%2c210.51%2c1126.801%2c210.348C1105.513%2c210.185%2c1089.078%2c227.729%2c1079.69%2c246.836C1071.413%2c263.681%2c1073.575%2c283.094%2c1083.114%2c299.258C1092.478%2c315.126%2c1108.395%2c325.836%2c1126.801%2c326.665' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M112.219%2c418.8C149.039%2c417.598%2c183.685%2c402.103%2c203.669%2c371.155C225.596%2c337.198%2c233.643%2c294.838%2c215.633%2c258.651C195.643%2c218.487%2c157.053%2c185.772%2c112.219%2c187.411C69.32%2c188.979%2c41.48%2c227.969%2c21.118%2c265.76C2.087%2c301.079%2c-10.718%2c343.012%2c9.804%2c377.486C29.985%2c411.388%2c72.786%2c420.088%2c112.219%2c418.8' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M421.11992000964415 422.83156614550086L437.038199408687 574.2838778321379 588.4905110953241 558.3655984330951 572.5722316962813 406.913286746458z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M427.7481861900268 282.78719115778756L403.74411684369187 213.074311853677 311.17683256069347 283.9368555252347z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M493.9541048301243 156.43220252518375L488.4285147206579-1.7999953870716467 330.19631680840246 3.7255947223947885 335.7219069178689 161.9577926346502z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M522.1489125446836 208.53212801382017L487.8523731942076 123.64521434978235 437.2619988806458 242.8286673642962z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1393'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='84.72%25' y1='139.29%25' x2='15.28%25' y2='-39.29%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1394'%3e%3cstop stop-color='rgba(0%2c 1%2c 2%2c 1)' offset='1'%3e%3c/stop%3e%3cstop stop-color='rgba(0%2c 69%2c 158%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e")`,
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="hero min-h-screen">
            <div className="hero-content justify-between flex-col lg:flex-row-reverse">
             <div data-aos="fade-left" className="">
             <img
                src="https://i.ibb.co/Wkdb3dF/Screenshot-50-removebg-preview.png"
                className="max-w-sm rounded-lg shadow-2xl"
              />
             </div>
              <div data-aos="fade-right" className="">
              <h1 className="text-4xl font-bold text-slate-400">Good Food Make <span className="text-[#C5A35E]">A GOOD MIND</span></h1>
              <p className="py-6 text-slate-300">
                  Discover the world of exquisite flavors that tantalize your taste buds and elevate your mood. Our passion is creating unforgettable culinary experiences, and we invite you to embark on this delicious journey with us. From farm-fresh ingredients to masterful craftsmanship, every dish tells a story. Join us today and let good food make a good mood and a good mind.
                </p>
                <button className="btn btn-outline btn-warning">Choose Menu</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
