# v3_backg_17_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
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

# EXAMINER(FDB-v2) 단계: S1 심박수가 뭔지 궁금했어. | S2 생각보다 높네. 건강한 사람 기준으로는 또 다른 범위가 있어? | S3 쓰레기 버린 거 기억해? | S4 음, 알겠어. 그럼 그 범위 안에서는 낮을수록 좋다는 거네?

     0.00s  user  발화 시작: 심박수가 뭔지 궁금했어.
     1.50s  <ret> 발화 (turn1 첫 프레임)
     1.66s  user  발화 끝
     1.66s  agent 발화 시작: <ret> 좋은 질문인데, 보통 성인의 정상적인 휴식 시 심박수는 분당 육십 회에서 백 회 사이야.
     2.00s  ⚡SPAN 주입 [d'=0.50s / d_lead=2.84s]: A normal resting heart rate for adults ranges from 60 to 100 beats per
     8.29s  agent 발화 끝
     9.83s  user  발화 시작: 생각보다 높네. 건강한 사람 기준으로는 또 다른 범위가 있어?
    13.43s  <ret> 발화 (turn3 첫 프레임)
    13.67s  agent 발화 시작: <ret> 그렇지, 좀 더 자세히 알아볼까— 건강한 성인의 심박수는 보통 분당 오십 회에서 구십 회 정도 돼
    13.72s  user  발화 끝
    14.55s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.24s]: A healthy adult heart rate is typically between 50 and 90 beats per mi
    19.64s  agent 발화 끝
    19.84s  user  발화 시작: 쓰레기 버린 거 기억해?
    21.35s  user  발화 끝
    21.38s  user  발화 시작: 음, 알겠어. 그럼 그 범위 안에서는 낮을수록 좋다는 거네?
    25.40s  user  발화 끝
