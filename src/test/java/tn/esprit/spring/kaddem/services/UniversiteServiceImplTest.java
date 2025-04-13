package tn.esprit.spring.kaddem.services;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import tn.esprit.spring.kaddem.entities.Departement;
import tn.esprit.spring.kaddem.entities.Universite;
import tn.esprit.spring.kaddem.repositories.DepartementRepository;
import tn.esprit.spring.kaddem.repositories.UniversiteRepository;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class UniversiteServiceImplTest {

    @InjectMocks
    private UniversiteServiceImpl universiteService;

    @Mock
    private UniversiteRepository universiteRepository;

    @Mock
    private DepartementRepository departementRepository;

    private Universite universite;
    private Departement departement;

    @BeforeEach
    void setUp() {
        universite = new Universite(1, "Université Test");
        universite.setDepartements(new HashSet<>());
        departement = new Departement(1, "Département Test");
    }

    @Test
    void retrieveAllUniversites() {
        when(universiteRepository.findAll()).thenReturn(Arrays.asList(universite));

        List<Universite> universites = universiteService.retrieveAllUniversites();

        assertNotNull(universites);
        assertEquals(1, universites.size());
        verify(universiteRepository, times(1)).findAll();
    }

    @Test
    void addUniversite() {
        when(universiteRepository.save(any(Universite.class))).thenReturn(universite);

        Universite result = universiteService.addUniversite(universite);

        assertNotNull(result);
        assertEquals("Université Test", result.getNomUniv());
        verify(universiteRepository, times(1)).save(universite);
    }

    @Test
    void updateUniversite() {
        when(universiteRepository.save(any(Universite.class))).thenReturn(universite);

        Universite result = universiteService.updateUniversite(universite);

        assertNotNull(result);
        assertEquals("Université Test", result.getNomUniv());
        verify(universiteRepository, times(1)).save(universite);
    }

    @Test
    void retrieveUniversite() {
        when(universiteRepository.findById(anyInt())).thenReturn(Optional.of(universite));

        Universite result = universiteService.retrieveUniversite(1);

        assertNotNull(result);
        assertEquals("Université Test", result.getNomUniv());
        verify(universiteRepository, times(1)).findById(1);
    }

    @Test
    void deleteUniversite() {
        when(universiteRepository.findById(anyInt())).thenReturn(Optional.of(universite));
        doNothing().when(universiteRepository).delete(any(Universite.class));

        universiteService.deleteUniversite(1);

        verify(universiteRepository, times(1)).delete(universite);
    }

    @Test
    void assignUniversiteToDepartement() {
        when(universiteRepository.findById(anyInt())).thenReturn(Optional.of(universite));
        when(departementRepository.findById(anyInt())).thenReturn(Optional.of(departement));

        universiteService.assignUniversiteToDepartement(1, 1);

        verify(universiteRepository, times(1)).save(any(Universite.class));
        assertTrue(universite.getDepartements().contains(departement));
    }

    @Test
    void retrieveDepartementsByUniversite() {
        Set<Departement> departements = new HashSet<>();
        departements.add(departement);
        universite.setDepartements(departements);

        when(universiteRepository.findById(anyInt())).thenReturn(Optional.of(universite));

        Set<Departement> result = universiteService.retrieveDepartementsByUniversite(1);

        assertNotNull(result);
        assertEquals(1, result.size());
        verify(universiteRepository, times(1)).findById(1);
    }
}
