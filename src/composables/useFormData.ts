import { reactive } from "vue";

interface FormData {
	[key: string]: string;
}

interface FormDataReturn {
	formData: FormData;
	handleUpdateData: (value: string, propName: string) => void;
}

export function useFormData(initialValues: FormData): FormDataReturn {
	const formData = reactive({ ...initialValues });

	const handleUpdateData = (value: string, propName: string) => {
		formData[propName] = value;
		console.log(formData);
	};

	return { formData, handleUpdateData };
}
