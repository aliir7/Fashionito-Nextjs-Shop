import followImg from "@/public/assets/insta-follow.webp";
import { instaImages } from "@/lib/constants";
import Image from "next/image";

function Follow() {
  return (
    <section>
      <div className="follow">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {instaImages.map((item, index) => (
            <div key={index} className="follow-img">
              <Image src={item} alt={`fallow-insta-${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="follow-text flex items-center gap-4 rounded-2xl bg-white p-3">
          <Image src={followImg} alt="follow img" width={40} height={40} />
          <h3 className="font-semibold">دنبال کنید Fashionito@</h3>
        </div>
      </div>
    </section>
  );
}

export default Follow;
