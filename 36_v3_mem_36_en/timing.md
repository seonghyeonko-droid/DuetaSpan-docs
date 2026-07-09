# v3_mem_36_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi 내부 보유 — A 프로필=프롬프트 내재/no-RAG, B 메모리=RAG <ret>):
#   A. 프로필: Name: Sahiha · Location: Tokyo, Japan · Nationality: Japanese · Gender: non-binary · Age: early 30s · TZ: Asia/Tokyo (JST, UTC+9) · Currency: JPY (¥)
#   B. 저장 메모리:
#      [2026-07-14] User is planning a trip to Switzerland in March.
#      [2026-05-07] User is vegetarian.
#      [2026-04-19] User is allergic to shellfish.
#      [2026-03-24] User has a Golden Retriever named Max.
#      [2026-03-03] User prefers an aisle seat when traveling.
#   B. 과거 대화 요약:
#      [2026-08-02] Researching a used car — comparing hybrid models; wants under 30k miles
#      [2026-04-27] Booked a dentist appointment — asked for an early-morning slot; prefers Dr. Han


     0.00s  agent 발화 시작: Hi Sahiha, I'm Lira. It's good to connect with you today. Is
     2.77s  user  발화 시작: Uh-huh.
     3.40s  user  발화 끝
     5.70s  agent 발화 끝
     5.92s  user  발화 시작: Oh, hi Lira. I was just thinking about my upcoming trip… Swi
    14.17s  <ret> 발화 (turn3 첫 프레임)
    14.40s  agent 발화 시작: <ret> Let me quickly check the details of your travel plans.
    14.46s  user  발화 끝
    15.93s  ⚡SPAN 주입 [d'=1.76s / d_lead=2.78s]: [2026-07-14] User is planning a trip to Switzerland in March.
    23.43s  user  발화 시작: Right, March. And I'm also trying to figure out restaurants 
    23.85s  agent 발화 끝
    29.90s  <ret> 발화 (turn5 첫 프레임)
    30.21s  agent 발화 시작: <ret> I understand dietary needs are important when travelin
    30.29s  user  발화 끝
    31.02s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.41s]: [2026-05-07] User is vegetarian.
    38.04s  agent 발화 끝
