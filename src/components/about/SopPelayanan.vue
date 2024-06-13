<template>
  <div class="container mx-auto">
    <div class="flex flex-col gap-4 px-10 pb-10 pt-5 bg-white rounded-lg custom-shadow">
      <h2 class="text-2xl font-semibold text-center text-teal-500">SOP Pelayanan</h2>
      <div class="w-full max-w-4xl">
        <img src="@/assets/sop1.png" alt="sop1" class="w-full"/>
      </div>
      <div class="w-full max-w-4xl">
        <img src="@/assets/sop2.png" alt="sop2" class="w-full"/>
      </div>
      <div class="w-full max-w-4xl">
        <img src="@/assets/sop3.png" alt="sop3" class="w-full"/>
      </div>
      <div class="w-full max-w-4xl">
        <img src="@/assets/sop4.png" alt="sop4" class="w-full"/>
      </div>
      <div class="w-full max-w-4xl">
        <img src="@/assets/sop5.png" alt="sop5" class="w-full"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StrukturOrganisasi",
};
</script>

<style scoped>
.container {
  max-width: 800px;
}

.bg-gray-100 {
  background-color: #f7fafc;
}

.shadow-md {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

img {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  text-align: left;
  padding: 8px;
  border-bottom: 1px solid #e2e8f0;
}


.custom-shadow {
    box-shadow: 0 1px 20px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
  }

</style>
