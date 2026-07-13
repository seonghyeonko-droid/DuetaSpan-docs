# v3_mem_32_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_32",
#     "name": "가형",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-30",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-04-02",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-02-24",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-12-09",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-08",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
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


     0.00s  agent 발화 시작: 안녕하세요, 가형님. 저는 베리로입니다. 편안한 수면과 휴식을 도와드리는 상담사예요.
     4.90s  user  발화 시작: 네.
     4.90s  agent 발화 끝
     5.44s  user  발화 시작: 안녕하세요, 베리로 씨. 혹시 제가 전에 알레르기 때문에 얘기했던 적 있나요?
     5.44s  user  발화 끝
    11.43s  agent 발화 시작: 네.
    11.43s  user  발화 끝
    11.68s  <ret> 발화 (turn4 첫 프레임)
    11.98s  agent 발화 시작: <ret> 네, 가형님. 이천이십육년 사월 삼십일에 해산물 알레르기가 있다고 말씀하셨었어요.
    11.98s  agent 발화 끝
    12.24s  ⚡SPAN 주입 [d'=0.56s / d_lead=4.90s]: [2026-04-30] User is allergic to shellfish.
    16.88s  user  발화 시작: 네.
    16.88s  agent 발화 끝
    17.42s  user  발화 시작: 아, 그렇군요. 그럼 혹시 제가 유제품은 잘 소화 못 하는 것도 기록해 두셨나요?
    17.42s  user  발화 끝
    24.50s  agent 발화 시작: 네.
    24.50s  user  발화 끝
    24.60s  <ret> 발화 (turn8 첫 프레임)
    24.90s  ⚡SPAN 주입 [d'=0.30s / d_lead=4.36s]: [2026-04-02] User is lactose-intolerant.
    25.05s  agent 발화 시작: <ret> 네, 맞아요. 이천이십육년 사월 이일에는 유당불내증이 있다고 말씀해주셨습니다.
    25.05s  agent 발화 끝
    29.40s  user  발화 시작: 와, 정말 꼼꼼하시네요. [laugh] 혹시 제가 좋아하는 음식은 뭐였죠?
    29.40s  agent 발화 끝
    34.30s  agent 발화 시작: 네.
    34.30s  user  발화 끝
    34.58s  <ret> 발화 (turn11 첫 프레임)
    34.85s  agent 발화 시작: <ret> 가형님께서는 에티오피아 음식을 가장 좋아하시는군요.
    34.85s  agent 발화 끝
    35.78s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.72s]: [2026-02-24] User's favorite cuisine is Ethiopian.
    37.57s  agent 발화 끝
