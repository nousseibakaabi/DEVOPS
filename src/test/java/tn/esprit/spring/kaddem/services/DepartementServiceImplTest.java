package tn.esprit.spring.kaddem.services;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;
import tn.esprit.spring.kaddem.entities.Departement;
import tn.esprit.spring.kaddem.repositories.DepartementRepository;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)

class DepartementServiceImplTest {

    @Mock
    private DepartementRepository departementRepository;

    @InjectMocks
    private DepartementServiceImpl departementService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void retrieveAllDepartements() {
        // Given
        Departement dep1 = new Departement(1, "Informatique");
        Departement dep2 = new Departement(2, "Électrique");
        when(departementRepository.findAll()).thenReturn(Arrays.asList(dep1, dep2));

        // When
        List<Departement> departements = departementService.retrieveAllDepartements();

        // Then
        assertEquals(2, departements.size());
        verify(departementRepository, times(1)).findAll();
    }

    @Test
    void addDepartement() {
        // Given
        Departement dep = new Departement(1, "Mécanique");
        when(departementRepository.save(dep)).thenReturn(dep);

        // When
        Departement addedDepartement = departementService.addDepartement(dep);

        // Then
        assertNotNull(addedDepartement);
        assertEquals("Mécanique", addedDepartement.getNomDepart());
        verify(departementRepository, times(1)).save(dep);
    }

    @Test
    void updateDepartement() {
        // Given
        Departement dep = new Departement(1, "Mécanique Modifié");
        when(departementRepository.save(dep)).thenReturn(dep);

        // When
        Departement updatedDepartement = departementService.updateDepartement(dep);

        // Then
        assertNotNull(updatedDepartement);
        assertEquals("Mécanique Modifié", updatedDepartement.getNomDepart());
        verify(departementRepository, times(1)).save(dep);
    }

    @Test
    void retrieveDepartement() {
        // Given
        Departement dep = new Departement(1, "Génie Civil");
        when(departementRepository.findById(1)).thenReturn(Optional.of(dep));

        // When
        Departement retrievedDepartement = departementService.retrieveDepartement(1);

        // Then
        assertNotNull(retrievedDepartement);
        assertEquals("Génie Civil", retrievedDepartement.getNomDepart());
        verify(departementRepository, times(1)).findById(1);
    }

    @Test
    void deleteDepartement() {
        // Given
        Departement dep = new Departement(1, "Physique");
        when(departementRepository.findById(1)).thenReturn(Optional.of(dep));

        // When
        departementService.deleteDepartement(1);

        // Then
        verify(departementRepository, times(1)).delete(dep);
    }
}
