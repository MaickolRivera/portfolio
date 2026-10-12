export type ExperienceItem = {
    start: string;
    end: string;
    role: string;
    company: string;
    description: string[];
};

export const timelineItems: { key: string; from: [number, number]; to?: [number, number] }[] = [
    { key: "freelance", from: [2024, 10] },
    { key: "openEnglish", from: [2026, 3], to: [2026, 8] },
    { key: "experta", from: [2025, 10], to: [2025, 12] },
    { key: "promise", from: [2025, 3], to: [2025, 9] },
];
