# v3_mem_32_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_32",
#     "name": "세율",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-11-12",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-10-28",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-10-02",
#       "category": "home",
#       "text": "User's home address is 인천 연수구 송도동 12-5."
#     },
#     {
#       "date": "2025-08-10",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-08-03",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in October."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-09-29",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 음… 안녕하세요. 전에 뉴질랜드 여행 계획 얘기했었는데, 혹시 | S2 아, 그렇군요… 혹시 여행 전에 알아두면 좋은 뉴질랜드 특산물 | S3 음… 예를 들면 어떤 게 있을까요? | S4 … 혹시 여행자 보험도 미리 알아봐야 할까요?

     0.00s  agent 발화 시작: 안녕하세요, 세율님. 저는 크리오온이라고 해요. 가족 관계나 연애 문제로 무엇이든 편하게 말씀해주세요.
     0.00s  <ret> 발화 (turn5 첫 프레임)
     0.07s  <ret> 발화 (turn2 첫 프레임)
     0.09s  user  발화 시작: 음… 안녕하세요. 전에 뉴질랜드 여행 계획 얘기했었는데, 혹시 기억하시나요?
     0.09s  agent 발화 끝
     0.15s  agent 발화 시작: <ret> 네, 기억하고 있어요. 세율님께서 시월에 뉴질랜드 여행을 계획하고 계신다고 말씀해주셨었죠.
     0.15s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: [2025-08-03] User is planning a trip to New Zealand in October.
     0.15s  user  발화 끝
     0.22s  user  발화 시작: 어머.
     0.22s  agent 발화 끝
     0.23s  user  발화 시작: 맞아요, 맞고요. 혹시 지금 뉴질랜드 날씨는 어떤가요?
     0.23s  user  발화 끝
     0.28s  agent 발화 시작: <ret> 현재 뉴질랜드는 십사 점 오°C이고, 습도는 팔십이퍼센트, 바람은 시속 칠 점 이킬로미터, 부분적
     0.28s  ⚡SPAN 주입 [d'=0.11s / d_lead=0.11s]: (tool result) {"temperature": "14.5°C", "humidity": "82%", "wind": "7.
     0.28s  user  발화 끝
     0.39s  user  발화 시작: 네.
     0.39s  agent 발화 끝
     0.40s  user  발화 시작: 아, 그렇군요… 혹시 여행 전에 알아두면 좋은 뉴질랜드 특산물이 있을까요?
     0.40s  user  발화 끝
     0.42s  <ret> 발화 (turn13 첫 프레임)
     0.47s  agent 발화 시작: 뉴질랜드는 아름다운 자연환경으로 유명하잖아요, 그만큼 독특한 특산물도 많답니다.
     0.47s  user  발화 끝
     0.53s  user  발화 시작: 음… 예를 들면 어떤 게 있을까요?
     0.53s  agent 발화 끝
     0.57s  agent 발화 시작: 마누카 꿀이 특히 유명하고, 양고기나 와인도 빼놓을 수 없죠.
     0.57s  user  발화 끝
     0.63s  user  발화 시작: 아, 마누카 꿀은 들어봤는데, 양고기는 잘 몰랐어요 —
     0.63s  agent 발화 끝
     0.69s  user  발화 시작: … 혹시 여행자 보험도 미리 알아봐야 할까요?
     0.69s  user  발화 끝
     0.74s  agent 발화 시작: <ret> 여행 전에 미리 준비하면 마음도 편하고, 예상치 못한 문제에도 대처할 수 있어요. 아, 그리고 세
     0.74s  user  발화 끝
     0.83s  ⚡SPAN 주입 [d'=0.09s / d_lead=0.09s]: [2025-11-12] User is allergic to pollen.
     0.94s  user  발화 시작: 네네.
     0.94s  agent 발화 끝
     0.94s  agent 발화 시작: 여행 준비 잘 하시고, 즐거운 여행 되시길 바랄게요.
     0.94s  user  발화 끝
     1.00s  agent 발화 끝
