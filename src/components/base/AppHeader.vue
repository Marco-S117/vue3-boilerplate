<template>
  <header class="flex items-center justify-between p-6 bg-gray-800">
    <nav>
      <ul class="flex items-center justify-center gap-4 red-">
        <li>
          <RouterLink :to="{ name: 'home' }" active-class="text-primary">
            Home
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'example' }" active-class="text-primary">
            Example
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'notFound' }" active-class="text-primary">
            404 page
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
