# v3_to_ot_12_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "서빈",
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
#       "date": "2026-05-26",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2026-03-20",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-03-01",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-11-02",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-10-22",
#       "category": "home",
#       "text": "User's home address is 657 Elm Street."
#     },
#     {
#       "date": "2025-07-24",
#       "category": "diet",
#       "text": "User is vegetarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-07-02",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 마이클 잭슨의 'Beat It' 기타 솔로를 누가 연주했 | S2 에디 밴 헤일런이요! 맞아요, 맞아요. | S3 잠깐만, 누구한테 전화 왔었지? | S4 아, 죄송해요. 다시 말씀드리면, 그 기타 솔로가 얼마나 유명

     0.00s  user  발화 시작: 혹시 마이클 잭슨의 'Beat It' 기타 솔로를 누가 연주했는지 아세요?
     3.62s  <ret> 발화 (turn1 첫 프레임)
     3.94s  agent 발화 시작: <ret> 'Beat It' 기타 솔로는 정말 유명하죠. 그 솔로를 연주한 사람은… 에디 반 헤일런입니다.
     4.07s  user  발화 끝
     5.06s  ⚡SPAN 주입 [d'=1.44s / d_lead=5.14s]: Eddie Van Halen played the guitar solo on Michael Jackson's "Beat It".
     5.86s  user  발화 시작: 맞아요.
     6.49s  user  발화 끝
     9.08s  agent 발화 끝
    10.06s  user  발화 시작: 에디 밴 헤일런이요! 맞아요, 맞아요.
    12.81s  <ret> 발화 (turn4 첫 프레임)
    12.82s  user  발화 끝
    12.96s  agent 발화 시작: <ret> 네, 맞습니다. 에디 밴 헤일런이 'Beat It'의 기타 솔로를 연주했답니다.
    14.81s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.21s]: Eddie Van Halen performed the guitar solo on Michael Jackson's "Beat I
    17.17s  agent 발화 끝
    17.75s  user  발화 시작: 잠깐만, 누구한테 전화 왔었지?
    19.57s  user  발화 시작: 아, 죄송해요. 다시 말씀드리면, 그 기타 솔로가 얼마나 유명한지 아세요?
    19.74s  user  발화 끝
    24.71s  agent 발화 시작: 그 솔로는 기타 연주 역사에 길이 남을 명곡이죠. 스트레스 해소에 도움이 될 만큼 에너지가 넘치고요.
    24.80s  user  발화 끝
    30.74s  agent 발화 끝
