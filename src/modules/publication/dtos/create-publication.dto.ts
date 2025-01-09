export interface CreatePublicationDTO {
    title: string;
    subtitle: string;
    description: string;
    isPublic: boolean;
    participants?: number[]; // IDs dos usuários participantes da publicação
    user_id: number; // ID do autor da publicação
    category_id: number; // ID da categoria
    sum?: number;
    num?: number;
}