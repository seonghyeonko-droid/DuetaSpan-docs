# v3_backg_17_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi 내부 보유 — A 프로필=프롬프트 내재/no-RAG, B 메모리=RAG <ret>):
#   A. 프로필: Name: Remy · Location: Sydney, Australia · Nationality: Australian · Gender: non-binary · Age: early 30s · TZ: Australia/Sydney (AEDT, UTC+11) · Currency: AUD ($)
#   B. 저장 메모리:
#      [2026-06-21] User is into alpine wildflower photography.
#      [2026-06-19] User prefers an aisle seat when traveling.
#      [2026-02-17] User's favorite cuisine is Korean BBQ.
#      [2026-01-27] User works as a architect.
#   B. 과거 대화 요약:
#      [2026-07-10] Setting up a home network — asked about mesh routers; coverage for a 3-story house
#      [2026-03-26] Apartment hunting downtown — wanted a pet-friendly building; budget for 2 bedrooms

# EXAMINER(FDB-v2) 단계: S1 I was just wondering, what's a nor | S2 Oh, that's higher than I thought.  | S3 Did you remember to take the trash | S4 Hmm, okay. So, lower is better, th

     0.00s  user  발화 시작: I was just wondering, what's a normal heart rate?
     3.14s  <ret> 발화 (turn1 첫 프레임)
     3.54s  agent 발화 시작: <ret> That’s a good question to ask— For most adults, a norm
     3.57s  user  발화 끝
     4.66s  ⚡SPAN 주입 [d'=1.52s / d_lead=1.90s]: A normal resting heart rate for adults ranges from 60 to 100 beats per
    10.81s  agent 발화 끝
    10.93s  user  발화 시작: Oh, that's higher than I thought. Is there a range for *heal
    16.54s  <ret> 발화 (turn3 첫 프레임)
    16.70s  agent 발화 시작: <ret> Certainly, let's refine that a little— A healthy adult
    16.76s  user  발화 끝
    17.50s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.19s]: A healthy adult heart rate is typically between 50 and 90 beats per mi
    23.64s  agent 발화 끝
    24.37s  user  발화 시작: Did you remember to take the trash out?
    26.67s  user  발화 끝
    26.80s  user  발화 시작: Hmm, okay. So, lower is better, then, as long as it’s in tha
    32.13s  user  발화 끝
