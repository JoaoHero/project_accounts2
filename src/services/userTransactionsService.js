async function userTransactionsService() {
    try {
        const response = await fetch('http://191.252.191.239:8080/userTransactions', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        });

        if (!response.ok) {
            throw new Error('Erro ao buscar dados do usuário');
        }

        const data = await response.json();
        return data;
        
    } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
        throw error;
    }
};

export default userTransactionsService;