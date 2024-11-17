import fetcher from "@/lib/fetcher";
import { SongType } from "@/types";
import { useQuery } from "@tanstack/react-query";

export function useCurrentSong() {
    const { data: currentSong, ...rest } = useQuery({
        queryKey: ["currentSong"],
        queryFn: () => fetcher("/api/now-playing") as Promise<SongType>,
        refetchInterval: 3 * 1000,
    });

    return { currentSong, ...rest };
}