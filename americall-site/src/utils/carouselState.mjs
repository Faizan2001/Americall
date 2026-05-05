export function normalizeSnapIndex(index, total) {
	if (!Number.isFinite(total) || total <= 0) return 0;
	return ((index % total) + total) % total;
}

export function getNextSnapIndex(currentIndex, total) {
	return normalizeSnapIndex(currentIndex + 1, total);
}

export function getSnapOffset(index, stepWidth) {
	return Math.max(0, index) * Math.max(0, stepWidth);
}
