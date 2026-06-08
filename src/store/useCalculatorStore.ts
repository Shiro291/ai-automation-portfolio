import { create } from 'zustand';

interface CalculatorData {
    format: string;
    students: string;
}

export interface RoiResult {
    savings: number;
    engagementLift: number;
    time: number;
}

interface CalculatorState {
    step: 1 | 2 | 3;
    data: CalculatorData;
    roiResult: RoiResult | null;
    isSubmitting: boolean;
    isSuccess: boolean;
    error: string | null;
    setStep: (step: 1 | 2 | 3) => void;
    updateData: (data: Partial<CalculatorData>) => void;
    submitForm: () => Promise<void>;
    reset: () => void;
}

const initialState = {
    step: 1 as 1 | 2 | 3,
    data: { format: '', students: '' },
    roiResult: null,
    isSubmitting: false,
    isSuccess: false,
    error: null,
};

export const useCalculatorStore = create<CalculatorState>((set, get) => ({
    ...initialState,

    setStep: (step) => set({ step }),

    updateData: (newData) => set((state) => ({
        data: { ...state.data, ...newData }
    })),

    submitForm: async () => {
        set({ isSubmitting: true, error: null });
        try {
            // Simulate processing delay for UI effect
            await new Promise(resolve => setTimeout(resolve, 1500));

            const { format, students } = get().data;
            const studentCount = parseInt(students || '0', 10);

            let savingsMultiplier = 750000;
            let engagement = 30;

            if (format === 'textbooks') { savingsMultiplier = 1275000; engagement = 65; }
            if (format === 'pdfs') { savingsMultiplier = 675000; engagement = 40; }
            if (format === 'video') { savingsMultiplier = 450000; engagement = 25; }
            if (format === 'lms') { savingsMultiplier = 225000; engagement = 15; }

            const roiResult = {
                savings: studentCount * savingsMultiplier,
                engagementLift: engagement,
                time: Math.round(studentCount * 0.5)
            };

            set({ isSubmitting: false, isSuccess: true, step: 3, roiResult });
        } catch (error) {
            set({ isSubmitting: false, error: 'Failed to calculate ROI.' });
        }
    },

    reset: () => set(initialState),
}));
