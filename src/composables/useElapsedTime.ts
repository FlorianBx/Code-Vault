import { ref, Ref } from "vue";

interface ElapsedTimeReturn {
	elapsedTime: Ref<string>;
}

export function useElapsedTime(
	input: { seconds: number; nanoseconds: number } | string,
): ElapsedTimeReturn {
	const elapsedTime = ref("");

	const calculateElapsedTime = () => {
		let date;

		if (!input) {
			elapsedTime.value = "No date provided";
			return;
		}

		if (typeof input === "string") {
			date = new Date(input);
		} else {
			const timestampMs = input.seconds * 1000 + input.nanoseconds / 1000000;
			date = new Date(timestampMs);
		}

		const now = new Date();
		const secondsPast = (now.getTime() - date.getTime()) / 1000;

		if (secondsPast < 60) {
			elapsedTime.value = `${Math.round(secondsPast)} seconds ago`;
			return;
		}
		const minutesPast = secondsPast / 60;
		if (minutesPast < 60) {
			if (Math.round(minutesPast) < 2) {
				elapsedTime.value = `${Math.round(minutesPast)} minute ago`;
				return;
			}
			elapsedTime.value = `${Math.round(minutesPast)} minutes ago`;
			return;
		}
		const hoursPast = minutesPast / 60;
		if (hoursPast < 24) {
			if (Math.round(hoursPast) < 2) {
				elapsedTime.value = `${Math.round(hoursPast)} hour ago`;
				return;
			}
			elapsedTime.value = `${Math.round(hoursPast)} hours ago`;
			return;
		}
		const daysPast = hoursPast / 24;
		if (daysPast < 7) {
			if (Math.round(daysPast) < 2) {
				elapsedTime.value = `${Math.round(daysPast)} day ago`;
				return;
			}
			elapsedTime.value = `${Math.round(daysPast)} days ago`;
			return;
		}
		const weeksPast = daysPast / 7;
		if (weeksPast < 4) {
			if (Math.round(weeksPast) < 2) {
				elapsedTime.value = `${Math.round(weeksPast)} week ago`;
				return;
			}
			elapsedTime.value = `${Math.round(weeksPast)} weeks ago`;
			return;
		}
		const monthsPast = daysPast / 30;
		if (monthsPast < 12) {
			if (Math.round(monthsPast) < 2) {
				elapsedTime.value = `${Math.round(monthsPast)} month ago`;
				return;
			}
			elapsedTime.value = `${Math.round(monthsPast)} months ago`;
			return;
		}
		const yearsPast = daysPast / 365;
		if (Math.round(yearsPast) < 2) {
			elapsedTime.value = `${Math.round(yearsPast)} year ago`;
			return;
		}
		elapsedTime.value = `${Math.round(yearsPast)} years ago`;
		return;
	};

	calculateElapsedTime();

	return { elapsedTime };
}
