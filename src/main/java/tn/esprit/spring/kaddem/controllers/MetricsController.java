package tn.esprit.spring.kaddem.controllers;

import io.micrometer.core.instrument.Counter;
import io.micrometer.core.instrument.MeterRegistry;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.annotation.PostConstruct;

@RestController
@RequestMapping("/metrics")
public class MetricsController {
    private final MeterRegistry meterRegistry;
    private Counter requestCounter;

    public MetricsController(MeterRegistry meterRegistry) {
        this.meterRegistry = meterRegistry;
    }

    @PostConstruct
    public void init() {
        requestCounter = Counter.builder("app_requests_total")
                .description("Total number of requests")
                .register(meterRegistry);
    }

    public void incrementRequestCount() {
        requestCounter.increment();
    }

    @GetMapping("/custom")
    public String customMetric() {
        meterRegistry.counter("custom_metric").increment();
        return "Custom metric incremented!";
    }
}