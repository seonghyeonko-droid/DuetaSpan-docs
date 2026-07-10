# v3_rag_24_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_24",
#     "name": "우서",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-03",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2026-01-30",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-12-29",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-08-13",
#       "category": "home",
#       "text": "User's home address is 609 Oak Avenue."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-09",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-09-22",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 듀 플레시스라는 성이 어디에서 유래되었는지 궁금해요.
     3.26s  <ret> 발화 (turn1 첫 프레임)
     3.56s  agent 발화 시작: <ret> 듀 플레시스라는 성은 아프리카너스어에서 비롯되었다고 해요… 프랑스에서 유래되었으며, '더 플레시스
     3.79s  user  발화 끝
     5.02s  ⚡SPAN 주입 [d'=1.76s / d_lead=8.85s]: 듀 플레시스라는 성은 프랑스에서 유래되었으며, '더 플레시스'라는 지명에서 비롯되었습니다.
    12.31s  agent 발화 시작: 아프리카너스어는 네덜란드어에서 파생된 남아프리카 공화국의 언어인데, 그 기원을 살펴보면…
    12.42s  agent 발화 끝
    16.89s  user  발화 시작: 맞아요.
    17.52s  user  발화 끝
    18.40s  user  발화 시작: 아프리카너스어가 네덜란드어에서 파생되었다니, 흥미롭네요. 그럼 듀 플레시스 성도 네덜란드와 관련이 있을까요?
    18.56s  agent 발화 끝
    26.14s  <ret> 발화 (turn5 첫 프레임)
    26.22s  agent 발화 시작: <ret> 네, 듀 플레시스 성은 프랑스 남부의 플레시스 지방에서 유래된 것으로 알려져 있어요… 프랑스에서 
    26.42s  user  발화 끝
    28.14s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.65s]: 듀 플레시스라는 성은 프랑스에서 유래되었으며, '더 플레시스'라는 지명에서 비롯되었습니다.
    33.80s  agent 발화 시작: 플레시스 지방은 중세 시대에 네덜란드인들이 많이 거주했던 곳인데, 그곳에서 성씨가 시작되어 남아프리카로 건너
    33.87s  agent 발화 끝
    42.61s  agent 발화 끝
    42.80s  user  발화 시작: 그렇군요. 듀 플레시스 성을 가진 유명한 사람도 있을까요?
    47.43s  <ret> 발화 (turn8 첫 프레임)
    47.81s  agent 발화 시작: <ret> 남아프리카 공화국의 전 대통령 F. W. 데 클레르크가 듀 플레시스 성을 가지고 있습니다… D.F
    47.94s  user  발화 끝
    49.43s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.48s]: 듀 플레시스 성을 가진 유명한 사람으로는 남아프리카 공화국의 정치인이자 총리를 지낸 D.F. 듀 플레시스가 있습니다.
    56.06s  agent 발화 시작: 그는 아파르트헤이트 종식에 기여한 인물로, 세계적으로도 잘 알려져 있죠.
    56.29s  agent 발화 끝
    60.41s  agent 발화 끝
