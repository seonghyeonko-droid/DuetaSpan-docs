# v3_mem_36_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
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


     0.00s  agent 발화 시작: 안녕하세요, 사히하님. 저는 리라예요. 오늘 만나 뵙게 되어 기뻐요. 제가 뭘 도와드릴까요?
     3.19s  user  발화 시작: 어어.
     4.00s  user  발화 끝
     6.39s  agent 발화 끝
     6.75s  user  발화 시작: 어, 안녕 리라. 다가오는 여행에 대해 생각하고 있었어… 스위스, 맞지? 내가 언제 간다고 했는지 기억이 안
    14.71s  <ret> 발화 (turn3 첫 프레임)
    14.87s  agent 발화 시작: <ret> 잠시 여행 계획을 확인해 볼게요. 내년 3월에 스위스 여행을 계획하신다고 말씀하셨어요. 여행에 대
    15.01s  user  발화 끝
    16.39s  ⚡SPAN 주입 [d'=1.68s / d_lead=5.18s]: [2026-07-14] User is planning a trip to Switzerland in March.
    23.68s  agent 발화 끝
    24.34s  user  발화 시작: 맞아, 3월. 그리고 거기 식당도 알아봐야 해. 먹는 거에 좀 신경 써야 하거든.
    29.22s  <ret> 발화 (turn5 첫 프레임)
    29.62s  agent 발화 시작: <ret> 여행 중에 식단이 중요하다는 것을 이해해요. 채식주의 식단을 챙기신다고 말씀하셨으니, 여행 중에 
    29.66s  user  발화 끝
    31.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.04s]: [2026-05-07] User is vegetarian.
    38.20s  agent 발화 끝
