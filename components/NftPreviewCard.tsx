function NftPreviewCard() {
  return (
    <main className="flex flex-col bg-veryDarkBlueCard w-96 p-5 rounded-2xl">
      <img
        src="/image-equilibrium.jpg"
        className="rounded-md w-full"
        alt="nft preview picture"
      />
      <h2 className="text-2xl font-bold text-white font-outfit my-5 hover:text-cyan hover:cursor-pointer">
        Equilibrium #3429
      </h2>
      <p className="text-softBlue">
        Our Equilibrium collection promotes balance and calm.
      </p>
      <div className="flex flex-row justify-between my-5">
        <div className="flex flex-row space-x-2">
          <img src="/icon-ethereum.svg" alt="ethereum symbol" className="h-5" />
          <div className="font-outfit text-cyan">0.041 ETH</div>
        </div>
        <div className="flex flex-row space-x-2">
          <img src="icon-clock.svg" alt="clock icon" className="h-5" />
          <div className="font-outfit text-softBlue">3 days left</div>
        </div>
      </div>
      <hr className="border-veryDarkBlueLine" />
      <div className="flex flex-row items-center space-x-5 mt-5">
        <img
          src="image-avatar.png"
          alt="profile picture"
          className="w-7 border border-white rounded-full"
        />
        <div>
          <span className="font-outfit text-softBlue">Creation of</span>{" "}
          <span className="font-outfit text-white hover:text-cyan hover:cursor-pointer">
            Jules Wyvern
          </span>
        </div>
      </div>
    </main>
  );
}

export default NftPreviewCard;
