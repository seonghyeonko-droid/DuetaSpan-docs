# v3_mcp_00_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_00",
#     "name": "성훈",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-03",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in May."
#     },
#     {
#       "date": "2026-04-29",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2026-04-27",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-01-13",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-10",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-02-04",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 루브르 박물관은 언제 열고 닫아요?
     2.56s  <ret> 발화 (turn1 첫 프레임)
     2.80s  agent 발화 시작: <ret> 루브르 박물관은 오전 아홉 시부터 오후 여섯 시까지 운영하고, 화요일에는 닫아요. 파리 리볼리 가
     2.80s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.34s]: (tool result) The Louvre Museum is open from 9 AM to 6 PM, closed on T
     2.96s  user  발화 끝
     7.77s  user  발화 시작: 응.
     8.26s  user  발화 끝
    11.05s  agent 발화 시작: 박물관 방문 계획을 세우시는군요. 좋은 시간 보내시길 바랍니다.
    11.13s  agent 발화 끝
    15.22s  agent 발화 끝
    15.88s  user  발화 시작: … 혹시 미리 예약해야 하나요?
    18.15s  <ret> 발화 (turn5 첫 프레임)
    18.23s  agent 발화 시작: <ret> 예약에 대해서는… 죄송합니다. 루브르 박물관에 대한 예약 정보는 찾을 수 없었어요. 현재 예약 시
    18.28s  user  발화 끝
    18.95s  ⚡SPAN 주입 [d'=0.80s / d_lead=1.08s]: (no information found)
    27.41s  agent 발화 끝
    27.52s  agent 발화 시작: 직접 루브르 박물관 웹사이트에서 예약을 확인해 보시는 것을 추천드립니다.
    32.19s  agent 발화 끝
    32.80s  user  발화 시작: 알겠습니다. 감사합니다.
    34.54s  user  발화 끝
    34.89s  agent 발화 시작: 도움이 되었다니 다행이에요. 즐거운 여행 되세요!
    37.80s  agent 발화 끝
