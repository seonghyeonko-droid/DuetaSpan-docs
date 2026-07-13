# v3_fake__14_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "현형",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-02",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in December."
#     },
#     {
#       "date": "2026-05-16",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2026-04-06",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2026-03-06",
#       "category": "home",
#       "text": "User's home address is 인천 연수구 송도동 12-5."
#     },
#     {
#       "date": "2025-12-18",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-20",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 오디세이 시작할 때 텔레마코스는 몇 살이야?
     3.28s  <ret> 발화 (turn1 첫 프레임)
     3.44s  agent 발화 시작: <ret> 텔레마코스는 아버지가 집으로 돌아올 때, 정확히 스무 살이었어요. 아직 젊은 나이였죠.
     3.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.31s]: Twenty is the age of Telemachus when his father, Odysseus, returns hom
     3.44s  user  발화 끝
     9.75s  user  발화 시작: 아, 그렇구나. 그럼 오디세이는 얼마나 오래 걸렸어?
     9.75s  agent 발화 끝
    13.60s  <ret> 발화 (turn3 첫 프레임)
    13.76s  agent 발화 시작: <ret> 오디세이 이야기는 오디세우스가 집으로 돌아오기까지 무려 이십년이나 걸렸답니다. 정말 긴 여정이었죠
    13.76s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=6.31s]: The current temperature in Reykjavik, Iceland is 8.2°C, with a humidit
    13.76s  user  발화 끝
    20.07s  user  발화 시작: 와, 정말 오래 걸렸네. 그동안 텔레마코스는 뭘 했어?
    20.07s  agent 발화 끝
    24.65s  agent 발화 시작: 텔레마코스는 아버지의 부재 동안 어머니를 지키고, 자신의 성장을 위해 여행을 떠났어요. 용감한 청년이었죠.
    24.65s  user  발화 끝
    32.11s  agent 발화 끝
