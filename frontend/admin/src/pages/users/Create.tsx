// CreateUser.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import { useCreateUserMutation } from '@/store/slices/userSlice';
import { useGetRolesQuery } from '@/store/slices/RoleSlice';
import InfoSection from './components/formSections/InfoSection';
import Button from '@/components/ui/Button';
import { useForm } from 'react-hook-form';

interface FormData {
    name: string;
    email: string;
    password: string;
    role: number;
    phone: string;
    profileImage?: FileList;
}

const CreateUser: React.FC = () => {
    const navigate = useNavigate();
    const [createUser, { isLoading }] = useCreateUserMutation();
    const { data: rolesData } = useGetRolesQuery({ page: 1, limit: 100 });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        try {
            await createUser({
                name: data.name,
                email: data.email,
                password: data.password,
                phone: data.phone,
                roleId: data.role,
            }).unwrap();

            navigate('/users');
        } catch (error) {
            console.error('Failed to create user:', error);
        }
    };

    const breadcrumbs = [
        { label: 'Manage Users', path: '/users/all' },
        { label: 'Create User', path: '/users/create' },
    ];

    return (
        <PageLayout title="Create User" breadcrumbs={breadcrumbs}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InfoSection register={register} errors={errors} />
                {/* <AddressSection register={register} errors={errors} /> */}

                <div className="pt-6 flex justify-end">
                    <Button
                        variant="danger"
                        className="mr-2"
                        type="button"
                        onClick={() => navigate('/users')}
                    >
                        Cancel
                    </Button>
                    <Button type="submit" disabled={isLoading}>
                        {isLoading ? 'Submitting...' : 'Submit'}
                    </Button>
                </div>
            </form>
        </PageLayout>
    );
};

export default CreateUser;
