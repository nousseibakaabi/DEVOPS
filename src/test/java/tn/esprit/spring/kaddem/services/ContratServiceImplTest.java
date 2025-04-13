package tn.esprit.spring.kaddem.services;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import tn.esprit.spring.kaddem.entities.Contrat;
import tn.esprit.spring.kaddem.repositories.ContratRepository;
import tn.esprit.spring.kaddem.repositories.EtudiantRepository;

import java.util.*;

@ExtendWith(MockitoExtension.class)
class ContratServiceImplTest {

    @Mock
    private ContratRepository contratRepository;

    @Mock
    private EtudiantRepository etudiantRepository;

    @InjectMocks
    private ContratServiceImpl contratService;

    private Contrat contrat;

    @BeforeEach
    void setUp() {
        contrat = new Contrat();
        contrat.setIdContrat(1);
        contrat.setArchive(false);
    }

    @Test
    void retrieveAllContrats_ShouldReturnList() {
        List<Contrat> contrats = Arrays.asList(contrat);
        when(contratRepository.findAll()).thenReturn(contrats);

        List<Contrat> result = contratService.retrieveAllContrats();
        assertEquals(1, result.size());
        verify(contratRepository, times(1)).findAll();
    }

    @Test
    void addContrat_ShouldSaveAndReturnContrat() {
        when(contratRepository.save(any(Contrat.class))).thenReturn(contrat);

        Contrat result = contratService.addContrat(contrat);
        assertNotNull(result);
        assertEquals(1, result.getIdContrat());
        verify(contratRepository, times(1)).save(contrat);
    }

    @Test
    void updateContrat_ShouldUpdateAndReturnContrat() {
        when(contratRepository.save(any(Contrat.class))).thenReturn(contrat);

        Contrat result = contratService.updateContrat(contrat);
        assertNotNull(result);
        assertEquals(1, result.getIdContrat());
        verify(contratRepository, times(1)).save(contrat);
    }

    @Test
    void retrieveContrat_ShouldReturnContrat() {
        when(contratRepository.findById(1)).thenReturn(Optional.of(contrat));

        Contrat result = contratService.retrieveContrat(1);
        assertNotNull(result);
        assertEquals(1, result.getIdContrat());
        verify(contratRepository, times(1)).findById(1);
    }

    @Test
    void removeContrat_ShouldDeleteContrat() {
        when(contratRepository.findById(1)).thenReturn(Optional.of(contrat));
        doNothing().when(contratRepository).delete(any(Contrat.class));

        contratService.removeContrat(1);
        verify(contratRepository, times(1)).delete(contrat);
    }
}
