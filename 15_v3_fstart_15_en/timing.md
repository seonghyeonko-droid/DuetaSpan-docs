# v3_fstart_15_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi 내부 보유 — A 프로필=프롬프트 내재/no-RAG, B 메모리=RAG <ret>):
#   A. 프로필: Name: Ada · Location: Sydney, Australia · Nationality: Australian · Gender: female · Age: 50s · TZ: Australia/Sydney (AEDT, UTC+11) · Currency: AUD ($)
#   B. 저장 메모리:
#      [2026-08-03] User works as a physical therapist.
#      [2026-07-09] User is into rock climbing.
#      [2026-06-08] User's favorite cuisine is Mexican.
#      [2026-06-02] User is allergic to pollen.
#      [2026-03-19] User is planning a trip to Switzerland in December.
#   B. 과거 대화 요약:
#      [2026-07-11] Apartment hunting downtown — wanted a pet-friendly building; budget for 2 bedrooms
#      [2026-01-08] Researching a used car — comparing hybrid models; wants under 30k miles

# EXAMINER(FDB-v2) 단계: S1 What are the latitude and longitud | S2 Oh, that's a shame. What about the | S3 Perfect. And what’s the cancellati | S4 Could we add breakfast to that res

     0.00s  user  발화 시작: What are the latitude and longitude of the Sydney Opera Hous
     3.15s  <ret> 발화 (turn1 첫 프레임)
     3.23s  agent 발화 시작: <ret> Let's pinpoint that iconic landmark for you— Its coord
     3.23s  user  발화 끝
     4.19s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.77s]: (tool result) The Sydney Opera House is located at -33.8568 degrees la
     7.97s  user  발화 시작: Yeah.
     8.47s  user  발화 끝
    14.31s  agent 발화 끝
    14.39s  user  발화 시작: Okay, and can you find me hotels near that location?
    16.97s  <ret> 발화 (turn4 첫 프레임)
    17.21s  agent 발화 시작: <ret> Absolutely, I can certainly search for nearby hotels— 
    17.21s  user  발화 끝
    18.57s  ⚡SPAN 주입 [d'=1.60s / d_lead=2.86s]: (tool result) Four Seasons Hotel Sydney is 0.8 miles away, priced at $
    27.22s  agent 발화 끝
    27.82s  user  발화 시작: Hmm, the Park Hyatt sounds nice, but is it pet-friendly?
    31.13s  <ret> 발화 (turn6 첫 프레임)
    31.20s  agent 발화 시작: <ret> That’s a good detail to check— Unfortunately, the Park
    31.43s  user  발화 끝
    32.41s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.57s]: (tool result) The Park Hyatt Sydney does not allow pets.
    37.64s  agent 발화 끝
    39.44s  user  발화 시작: Oh, that's a shame. What about the Four Seasons?
    42.69s  <ret> 발화 (turn8 첫 프레임)
    43.09s  agent 발화 시작: <ret> Let me check the pet policy for the Four— The Four Sea
    43.18s  user  발화 끝
    43.19s  ⚡SPAN 주입 [d'=0.50s / d_lead=3.11s]: (tool result) The Four Seasons Hotel Sydney allows pets under ten poun
    48.26s  user  발화 시작: Yeah, totally.
    49.53s  user  발화 끝
    50.70s  agent 발화 끝
    51.97s  user  발화 시작: That’s much better! Can you see if they have availability ne
    56.43s  <ret> 발화 (turn11 첫 프레임)
    56.66s  agent 발화 시작: <ret> Of course, let me check availability for you— They hav
    56.69s  user  발화 끝
    57.39s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.01s]: (tool result) The Four Seasons Hotel Sydney has one room available nex
    63.43s  agent 발화 끝
    64.83s  user  발화 시작: Perfect. And what’s the cancellation policy?
    67.47s  <ret> 발화 (turn13 첫 프레임)
    67.55s  agent 발화 시작: <ret> Let’s find out about their cancellation terms— You can
    67.60s  user  발화 끝
    69.23s  ⚡SPAN 주입 [d'=1.76s / d_lead=2.85s]: (tool result) Cancellations are permitted up to 72 hours before arriva
    70.15s  user  발화 시작: Mhm.
    70.59s  user  발화 끝
    75.12s  user  발화 시작: That sounds reasonable. I think I’d like to book that room—
    75.28s  agent 발화 끝
    78.68s  user  발화 끝
    78.82s  <ret> 발화 (turn16 첫 프레임)
    78.97s  agent 발화 시작: <ret> Wonderful, I’m happy to help with that— Your room is b
    80.66s  ⚡SPAN 주입 [d'=1.84s / d_lead=2.95s]: (tool result) Reservation confirmed: Deluxe Harbour View room at Four 
    83.28s  user  발화 시작: Yeah, yeah.
    84.10s  user  발화 끝
    88.66s  agent 발화 끝
    88.83s  user  발화 시작: Actually, hold on—
    90.18s  user  발화 시작: Could we add breakfast to that reservation?
    90.31s  user  발화 끝
    91.98s  <ret> 발화 (turn20 첫 프레임)
    92.37s  agent 발화 시작: <ret> Certainly, let's add breakfast to your booking— Breakf
    92.53s  user  발화 끝
    93.26s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.78s]: (tool result) Breakfast added to reservation XYL789: $60 per day. Tota
    96.26s  user  발화 시작: Yeah.
    96.84s  user  발화 끝
   101.65s  <ret> 발화 (turn22 첫 프레임)
   101.89s  agent 발화 시작: <ret> I’m glad we could customize your stay— Your updated to
   101.92s  agent 발화 끝
   102.77s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.20s]: (tool result) Reservation XYL789 updated: Deluxe Harbour View room, br
   106.32s  user  발화 시작: Yeah.
   106.76s  user  발화 끝
   108.69s  user  발화 시작: That sounds fantastic, thank you.
   108.79s  agent 발화 끝
   110.95s  user  발화 끝
   111.09s  agent 발화 시작: You are very welcome! I hope you and your furry friend have 
   119.29s  agent 발화 끝
