const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
    >
      <div className="flex flex-col gap-20 max-w-[80%] text-center items-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-semibold text-white text-[30px] md:text-[50px]">
            Goals{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#28e7b4] to-[#e6ee92ef]">
              {" "}
              &{" "}
            </span>
            Develop Plans
          </h1>
          <p className="hidden md:inline-block text-gray-400 text-[20px]">
            We are thrilled to share some monumental news with you all! As
            pioneers in the ever-evolving realm of NFTs, we&apos;ve been on an
            incredible journey together, pushing the boundaries of digital
            ownership and creativity. Today, we stand on the cusp of a
            remarkable milestone, one that marks a significant leap
            forward for our platform and community.
          </p>
          <ul className="text-gray-400 text-[20px] text-left">
            <li>
              <span className="font-bold text-green-500">Sleeker Platform:</span> A smoother, more
              user-friendly experience.
            </li>
            <li>
              <span className="font-bold text-green-500">Bigger Marketplace:</span> More networks and
              diverse digital assets.
            </li>
            <li>
              <span className="font-bold text-green-500">Cutting-edge Tech:</span> Advancements that
              redefine NFTs.
            </li>
            <li>
              <span className="font-bold text-green-500">Community Focus:</span> Your feedback drives our
              progress.
            </li>
            <li>
              <span className="font-bold text-green-500">Exclusive Collabs:</span> Partnerships with top
              brands and artists.
            </li>
          </ul>
          <p className="hidden md:inline-block text-gray-400 text-[20px]">
            Stay tuned for more updates, announcements, and surprises in
            the days and weeks ahead. The future of NFTs is bright, and
            together, we&apos;re shaping it in ways we&apos;ve only dreamed of.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
