# v3_mem_34_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_34",
#     "name": "지안",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-04",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     },
#     {
#       "date": "2025-11-28",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-11-21",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-09-23",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2025-07-13",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 해운대로 570."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-25",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-02-03",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 마온님. 요즘 좀 답답해서요. | S2 음… 바다가 좋을 것 같아요. — | S3 …근데, 차는 없어요. 대중교통으로 갈 수 있는 곳이면 좋겠어 | S4 오, 가까운 곳에 있네요. 한번 가볼까요?

     0.00s  agent 발화 시작: 안녕하세요, 지안님. 저는 마온이라고 해요. 오늘 하루는 어떠셨어요?
     0.09s  user  발화 시작: 안녕하세요, 마온님. 요즘 좀 답답해서요.
     0.09s  agent 발화 끝
     0.15s  agent 발화 시작: 답답함을 느끼시는군요. 뭔가 막히는 부분이 있으신 건가요?
     0.15s  user  발화 끝
     0.18s  <ret> 발화 (turn5 첫 프레임)
     0.22s  user  발화 시작: 네네.
     0.22s  agent 발화 끝
     0.24s  user  발화 시작: 네, 그러게요. 어디론가 떠나고 싶은데, 어디로 가야 할지 모르겠어요.
     0.24s  user  발화 끝
     0.34s  agent 발화 시작: <ret> 집이 부산 해운대구에 있으시군요. 혹시 어디든 괜찮다면, 가까운 곳부터 시작해 볼까요?
     0.34s  ⚡SPAN 주입 [d'=0.12s / d_lead=0.12s]: [2026-07-13] User's home address is 부산 해운대구 해운대로 570.
     0.34s  user  발화 끝
     0.46s  user  발화 시작: 맞아요.
     0.46s  agent 발화 끝
     0.47s  agent 발화 시작: 그럼, 지금 계신 곳에서 출발해서 갈 만한 곳을 찾아볼까요? 어디를 선호하시나요? 바다, 산, 아니면 도시?
     0.47s  user  발화 끝
     0.57s  <ret> 발화 (turn10 첫 프레임)
     0.64s  user  발화 시작: 음… 바다가 좋을 것 같아요. —
     0.64s  agent 발화 끝
     0.71s  user  발화 시작: …근데, 차는 없어요. 대중교통으로 갈 수 있는 곳이면 좋겠어요.
     0.71s  user  발화 끝
     0.81s  agent 발화 시작: <ret> 해운대에서 송정해수욕장까지 버스로 이십오분 정도 걸리고, 거리는 오 점 이킬로미터네요. 괜찮으시겠
     0.81s  ⚡SPAN 주입 [d'=0.12s / d_lead=0.12s]: (tool result) {"distance": "5.2 km", "duration": "25 minutes", "direct
     0.81s  user  발화 끝
     0.93s  user  발화 시작: 오, 가까운 곳에 있네요. 한번 가볼까요?
     0.93s  agent 발화 끝
     1.00s  user  발화 끝
