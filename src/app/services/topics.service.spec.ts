import { TestBed, inject } from '@angular/core/testing';

import { TopicsService } from './topics.service';

describe('TopicsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopicsService]
    });
  });

  it('should ...', inject([TopicsService], (service: TopicsService) => {
    expect(service).toBeTruthy();
  }));
});
