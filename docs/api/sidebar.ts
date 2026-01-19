import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/routify-simulation-api",
    },
    {
      type: "category",
      label: "Users",
      items: [
        {
          type: "doc",
          id: "api/mengambil-daftar-seluruh-user",
          label: "Mengambil daftar seluruh user",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/proses-onboarding-user",
          label: "Proses onboarding user",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/mengundang-user-baru",
          label: "Mengundang user baru",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/mengambil-detail-user",
          label: "Mengambil detail user",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/memperbarui-data-user",
          label: "Memperbarui data user",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/memblokir-user",
          label: "Memblokir user",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/membuka-blokir-user",
          label: "Membuka blokir user",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Simulations",
      items: [
        {
          type: "doc",
          id: "api/membuat-simulasi-baru",
          label: "Membuat simulasi baru",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/mengambil-daftar-simulasi",
          label: "Mengambil daftar simulasi",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/mengambil-detail-simulasi",
          label: "Mengambil detail simulasi",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/menghapus-simulasi",
          label: "Menghapus simulasi",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/upload-data-simulasi",
          label: "Upload data simulasi",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/mengatur-konfigurasi-simulasi",
          label: "Mengatur konfigurasi simulasi",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/menjalankan-simulasi",
          label: "Menjalankan simulasi",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/mengambil-status-simulasi",
          label: "Mengambil status simulasi",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/ringkasan-hasil-simulasi",
          label: "Ringkasan hasil simulasi",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/daftar-kendaraan-simulasi",
          label: "Daftar kendaraan simulasi",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rute-kendaraan-hasil-simulasi",
          label: "Rute kendaraan hasil simulasi",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/hasil-lengkap-simulasi",
          label: "Hasil lengkap simulasi",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
