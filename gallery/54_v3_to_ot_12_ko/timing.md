# v3_to_ot_12_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "유호",
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
#       "date": "2026-05-29",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2025-11-11",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-09-24",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-06-18",
#       "category": "home",
#       "text": "User's home address is 대구 중구 동인동 88-1."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-17",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-08-21",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 혹시 인도에서 처음으로 트리플 센추리 친 선수가 누구였는지 아세요?
     3.91s  <ret> 발화 (turn1 첫 프레임)
     4.21s  ⚡SPAN 주입 [d'=0.30s / d_lead=6.29s]: Virender Sehwag was the first Indian batsman to score a triple century
     4.36s  agent 발화 시작: <ret> 인도에서 처음으로 트리플 센추리를 친 선수는 비렌더 세와그 선수인데, 이천사년에 파키스탄과의 경기
     4.36s  user  발화 끝
    10.65s  user  발화 시작: 정말요?
    10.65s  agent 발화 끝
    11.13s  user  발화 시작: 어머, 진짜? 대박이다!
    11.13s  user  발화 끝
    12.59s  user  발화 시작: 세와그 선수가 언제 그 기록을 세웠는지 다시 한 번 알려주시겠어요?
    12.59s  user  발화 끝
    17.43s  agent 발화 시작: 아, 다시 말씀드리자면, 비렌더 세와그 선수는 이천사년에 파키스탄과의 경기에서 트리플 센추리를 쳤습니다.
    17.43s  user  발화 끝
    23.24s  user  발화 시작: 오.
    23.24s  agent 발화 끝
    23.72s  agent 발화 시작: 혹시 다른 크리켓 선수에 대해 궁금한 점이 있으신가요? 아니면 다른 이야기를 해볼까요?
    23.72s  user  발화 끝
    29.53s  agent 발화 끝
