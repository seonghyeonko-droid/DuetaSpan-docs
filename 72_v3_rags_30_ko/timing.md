# v3_rags_30_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_30",
#     "name": "도경",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-06",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2026-02-14",
#       "category": "home",
#       "text": "User's home address is 인천 연수구 송도동 12-5."
#     },
#     {
#       "date": "2025-09-30",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-09-12",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-22",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 디즈니랜드 전기 퍼레이드는 언제 끝나?
     2.99s  <ret> 발화 (turn1 첫 프레임)
     3.15s  agent 발화 시작: <ret> 디즈니랜드 전기 퍼레이드는 이천십칠년 팔월 이십일에 끝났답니다. 혹시 다른 행사도 알아볼까요?
     3.15s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.92s]: The Disneyland Electric Light Parade concluded on August 20, 2017.
     3.15s  user  발화 끝
    10.07s  agent 발화 끝
