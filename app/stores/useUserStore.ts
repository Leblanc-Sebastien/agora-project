import { defineStore } from 'pinia'

export interface User {
  id: number
  name: string
  email: string
  avatar?: string
}

// Syntaxe Setup Store (moderne et recommandée)
export const useUserStore = defineStore('user', () => {
  // State (avec ref)
  const currentUser = ref<User | null>(null)
  const users = ref<User[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  // Getters (avec computed)
  const isAuthenticated = computed<boolean>(() => currentUser.value !== null)

  const getUserById = computed(() => {
    return (userId: number) => users.value.find((user) => user.id === userId)
  })

  const userCount = computed(() => users.value.length)

  const fullName = computed(() => currentUser.value?.name || 'Invité')

  // Actions (fonctions)
  async function login(email: string, password: string) {
    isLoading.value = true
    error.value = null

    try {
      // Simulation d'un appel API - remplacer par votre vraie API
      // const response = await $fetch('/api/auth/login', {
      //   method: 'POST',
      //   body: { email, password }
      // })

      // Simulation pour l'exemple
      await new Promise((resolve) => setTimeout(resolve, 1000))
      currentUser.value = {
        id: 1,
        name: 'John Doe',
        email: email,
      }
      return true
    } catch (err) {
      error.value = 'Erreur lors de la connexion'
      console.error(err)
      return false
    } finally {
      isLoading.value = false
    }
  }

  function logout() {
    currentUser.value = null
    error.value = null
  }

  async function fetchUsers() {
    isLoading.value = true
    error.value = null

    try {
      // Simulation d'un appel API
      // const response = await $fetch('/api/users')
      // users.value = response

      // Données de test
      await new Promise((resolve) => setTimeout(resolve, 800))
      users.value = [
        { id: 1, name: 'Alice Martin', email: 'alice@example.com' },
        { id: 2, name: 'Bob Dupont', email: 'bob@example.com' },
        { id: 3, name: 'Claire Bernard', email: 'claire@example.com' },
      ]
    } catch (err) {
      error.value = 'Erreur lors du chargement des utilisateurs'
      console.error(err)
    } finally {
      isLoading.value = false
    }
  }

  function addUser(user: User) {
    users.value.push(user)
  }

  function updateUser(userId: number, updates: Partial<User>) {
    const index = users.value.findIndex((u) => u.id === userId)
    if (index !== -1) {
      users.value[index] = { ...users.value[index], ...updates } as User
    }
  }

  function deleteUser(userId: number) {
    const index = users.value.findIndex((u) => u.id === userId)
    if (index !== -1) {
      users.value.splice(index, 1)
    }
  }

  function $reset() {
    currentUser.value = null
    users.value = []
    isLoading.value = false
    error.value = null
  }

  // Return (exposer state, getters et actions)
  return {
    // State
    currentUser,
    users,
    isLoading,
    error,
    // Getters
    isAuthenticated,
    getUserById,
    userCount,
    fullName,
    // Actions
    login,
    logout,
    fetchUsers,
    addUser,
    updateUser,
    deleteUser,
    $reset,
  }
})
