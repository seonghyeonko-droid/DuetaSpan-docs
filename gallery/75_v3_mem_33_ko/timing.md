# v3_mem_33_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_33",
#     "name": "세준",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-05",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2026-04-21",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-03-22",
#       "category": "home",
#       "text": "User's home address is 서울 강남구 역삼동 678-9."
#     },
#     {
#       "date": "2025-11-09",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2025-09-07",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-05-28",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-07-09",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 프레님. 지금 시각이 어떻게 돼요? | S2 그럼 혹시 다음 주 화요일에 비행기표 예매하려고 하는데, 통로 | S3 좋네요. 그럼 예매해 주세요. | S4 잘 챙겨주셔서 고맙습니다.

     0.00s  agent 발화 시작: 안녕하세요, 세준님. 저는 수면과 휴식을 도와드리는 에이전트 프레입니다.
     2.49s  user  발화 시작: 네.
     3.08s  user  발화 끝
     4.71s  agent 발화 끝
     4.86s  user  발화 시작: 안녕하세요, 프레님. 지금 시각이 어떻게 돼요?
     7.70s  <ret> 발화 (turn3 첫 프레임)
     7.78s  agent 발화 시작: <ret> 지금은 이천이십육년 칠월 십일 금요일 오후 세시 십칠분입니다. 서울 시간 기준이에요.
     7.78s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.79s]: (tool result) It is Friday, July 10, 2026 at 3:17 PM in Asia/Seoul rig
     7.95s  user  발화 끝
    13.57s  agent 발화 끝
    13.75s  user  발화 시작: 아, 그러네요. 혹시 제가 이천이십오년 오월 이십팔일에 좌석 선호도에 대해 말씀드렸었나요?
    19.32s  <ret> 발화 (turn5 첫 프레임)
    19.55s  agent 발화 시작: <ret> 네, 이천이십오년 오월 이십팔일에 여행할 때 통로 쪽 좌석을 선호하신다고 말씀하셨어요.
    19.55s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.60s]: [2025-05-28] User prefers an aisle seat when traveling.
    19.57s  user  발화 끝
    21.68s  user  발화 시작: 네.
    22.22s  user  발화 끝
    25.15s  agent 발화 끝
    25.24s  user  발화 시작: 그럼 혹시 다음 주 화요일에 비행기표 예매하려고 하는데, 통로 좌석으로 알아봐 주실 수 있을까요?
    30.44s  <ret> 발화 (turn8 첫 프레임)
    30.68s  agent 발화 시작: <ret> 다음 주 화요일, 칠월 십오일 서울에서 제주로 가는 편도 항공권이 팔만 오천 원에 있고, 통로 좌
    30.68s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.76s]: (tool result) One-way flight from Seoul (ICN) to Jeju (CJU) on July 15
    30.84s  user  발화 끝
    32.93s  user  발화 시작: 맞아요.
    33.74s  user  발화 끝
    37.45s  agent 발화 끝
    37.69s  user  발화 시작: 좋네요. 그럼 예매해 주세요.
    39.48s  <ret> 발화 (turn11 첫 프레임)
    39.56s  agent 발화 시작: <ret> 네, 칠월 십오일 서울에서 제주로 가는 편도 항공권, 통로 좌석으로 예약 완료되었습니다. 확인 번
    39.56s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.20s]: (tool result) One-way flight from Seoul (ICN) to Jeju (CJU) on July 15
    39.80s  user  발화 끝
    47.76s  agent 발화 끝
    47.82s  user  발화 시작: 감사합니다. 혹시 제가 채식주의자라는 것도 기억하고 계시죠?
    51.62s  <ret> 발화 (turn13 첫 프레임)
    51.69s  agent 발화 시작: <ret> 네, 세준님은 채식주의자이신 걸 기억하고 있습니다.
    51.70s  ⚡SPAN 주입 [d'=1.60s / d_lead=2.95s]: [2025-09-07] User is vegan.
    51.94s  user  발화 끝
    53.65s  user  발화 시작: 그렇죠.
    54.47s  user  발화 끝
    54.64s  agent 발화 끝
    56.21s  user  발화 시작: 잘 챙겨주셔서 고맙습니다.
    58.10s  user  발화 끝
    58.14s  agent 발화 시작: 언제든지 편하게 말씀해 주세요. 세준님의 편안한 휴식을 응원합니다.
    62.31s  agent 발화 끝
