// src/services/projectService.ts
import type { Project } from "../types/project";

const API_URL = "/data/projects.json";

/**
 * JSON dosyasından projeleri asenkron olarak çeken fonksiyon.
 * async/await yapısı sayesinde veri gelene kadar bekler.
 */
export async function fetchProjects(): Promise<Project[]> {
  try {
    const response = await fetch(API_URL);

    // Yanıtın başarılı (200 OK) olup olmadığını kontrol ediyoruz
    if (!response.ok) {
      throw new Error(`Projeler yüklenemedi: ${response.status}`);
    }

    // Gelen JSON verisini Project tipinde bir diziye çeviriyoruz
    const data: Project[] = await response.json();
    return data;
  } catch (error) {
    // Hata oluşursa konsola yazdır ve hatayı yukarı (bileşene) fırlat
    console.error("Veri çekme hatası:", error);
    throw error;
  }
}