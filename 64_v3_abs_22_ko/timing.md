# v3_abs_22_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_22",
#     "name": "정재",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-04-07",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-01-12",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-10-05",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     },
#     {
#       "date": "2025-06-07",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-03",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 아오누마 게임 후속작은 어떤 콘솔로 나왔을까요? | S2 …개발자분들의 작품은 찾아보실 수 있나요? | S3 미야모토 시게루 님의 작품을 찾아주세요. | S4 아, 슈퍼 마리오 육십사군요. 그 게임 정말 재미있게 했었어요

     0.00s  user  발화 시작: 아오누마 게임 후속작은 어떤 콘솔로 나왔을까요?
     3.39s  agent 발화 시작: 아오누마님의 게임 후속작이 어떤 콘솔로 출시되었는지—
     3.56s  user  발화 끝
     7.65s  agent 발화 끝
     7.86s  user  발화 시작: … 혹시 다른 게임…
     9.28s  user  발화 끝
    10.83s  user  발화 시작: …개발자분들의 작품은 찾아보실 수 있나요?
    13.41s  user  발화 끝
    13.52s  agent 발화 시작: 네, 다른 개발자분들의 작품도 찾아볼 수 있습니다. 어떤 분의 작품을 알아봐 드릴까요?
    18.93s  agent 발화 끝
    19.31s  user  발화 시작: 미야모토 시게루 님의 작품을 찾아주세요.
    21.61s  <ret> 발화 (turn6 첫 프레임)
    21.76s  agent 발화 시작: <ret> 미야모토 시게루 님은 천구백구십육년에 닌텐도 육십사용 삼D 플랫폼 게임인 슈퍼 마리오 육십사를 개
    21.77s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.44s]: (tool result) Super Mario 64 was a landmark 3D platformer directed by 
    21.90s  user  발화 끝
    25.50s  user  발화 시작: 진짜요?
    26.14s  user  발화 끝
    29.75s  user  발화 시작: 아, 슈퍼 마리오 육십사군요. 그 게임 정말 재미있게 했었어요.
    30.20s  agent 발화 끝
    33.06s  agent 발화 시작: 정말 즐거운 게임이었죠. 그때 즐거웠던 추억이 있으셨다니 저도 기쁩니다.
    33.26s  user  발화 끝
    38.16s  agent 발화 끝
