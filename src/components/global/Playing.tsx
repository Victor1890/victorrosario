import { SongType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { SiSpotify } from "react-icons/si";

interface IPlayingProps {
  song: SongType;
}

export const Playing = ({ song }: IPlayingProps) => (
  <div className="flex flex-col gap-4 w-full">
    <h4 className="text-lg font-semibold">Now Playing</h4>
    <Link
      href={song.songUrl}
      target="_blank"
      className="flex items-center justify-between rounded-sm pb-3 sm:pb-4 gap-4 lg:gap-0"
    >
      <div className="flex items-center gap-2 ">
        <div className="h-10 w-10">
          <Image
            alt={`Music now playing: ${song.title} by ${song.artist}`}
            src={song.albumImageUrl}
            width={40}
            height={40}
            quality={50}
            placeholder="blur"
            blurDataURL={song.albumImageUrl}
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
          <h3 className="animate- font-semibold text-black dark:text-white md:text-lg">
            {song.title}
          </h3>
          <span className="hidden dark:text-gray-300 md:inline-flex">—</span>

          <p className="text-xs text-gray-600 dark:text-gray-400 sm:text-sm">
            {song.artist}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <SiSpotify className="h-6 w-6 animate-[spin_2s_linear_infinite] text-green-500" />
      </div>
    </Link>
  </div>
);

export function NotPlaying() {
  return (
    <div className="flex flex-row-reverse items-center justify-between gap-2 sm:flex-row sm:justify-start">
      <SiSpotify className="h-6 w-6" />
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
        <div className="font-semibold text-black dark:text-white md:text-lg">
          Not Playing
        </div>
        <span className="hidden md:inline-flex">—</span>
        <p className="text-xs text-gray-500 sm:text-sm">Spotify</p>
      </div>
    </div>
  );
}
