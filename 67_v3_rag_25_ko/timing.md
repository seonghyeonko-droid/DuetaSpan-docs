# v3_rag_25_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_25",
#     "name": "예은",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-06-26",
#       "category": "home",
#       "text": "User's home address is 서울 마포구 성산동 45-6."
#     },
#     {
#       "date": "2026-04-05",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-11-17",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-07-13",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-06-11",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-16",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-12-20",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-10-10",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 피터 첼솜하고 빌리 밥 손튼 중에 누가 더 유명한 음악가야? | S2 음, 그건 알겠는데, 피터 첼솜은 음악 활동 안 해? | S3 … 근데 영화감독이랑 음악가랑 뭐가 더 잘 나가? | S4 아, 그렇구나. 그럼 빌리 밥 손튼 앨범 좀 찾아볼까?

     0.00s  user  발화 시작: 피터 첼솜하고 빌리 밥 손튼 중에 누가 더 유명한 음악가야?
     3.55s  <ret> 발화 (turn1 첫 프레임)
     3.70s  agent 발화 시작: <ret> 빌리 밥 손튼은 배우이자 영화감독, 그리고 음악가로도 활동하며 여러 장의 앨범을 발표했어요.
     3.71s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.25s]: Billy Bob Thornton is an American actor, filmmaker, and musician who h
     3.84s  user  발화 끝
     9.74s  user  발화 시작: 음, 그건 알겠는데, 피터 첼솜은 음악 활동 안 해?
     9.96s  agent 발화 끝
    12.97s  <ret> 발화 (turn3 첫 프레임)
    13.05s  agent 발화 시작: <ret> 피터 첼솜은 영화감독이자 각본가로, "Hear My Song" 같은 영화로 유명하답니다 —
    13.05s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.64s]: Peter Chelsom is a British film director and screenwriter, known for f
    13.16s  user  발화 끝
    17.91s  user  발화 시작: … 근데 영화감독이랑 음악가랑 뭐가 더 잘 나가?
    18.70s  agent 발화 끝
    21.15s  user  발화 끝
    21.15s  <ret> 발화 (turn5 첫 프레임)
    21.23s  agent 발화 시작: <ret> 영화감독으로 더 잘 알려져 있는 것 같아요.
    21.23s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.86s]: Billy Bob Thornton has been nominated for an Academy Award for his act
    22.06s  user  발화 시작: 맞아.
    22.55s  user  발화 끝
    23.89s  agent 발화 시작: 빌리 밥 손튼은 연기 및 연출로 아카데미상 후보에 여러 번 올랐어요. 그는 연기뿐 아니라 연출 능력도 인정받
    24.09s  agent 발화 끝
    26.88s  user  발화 시작: 응.
    27.10s  user  발화 끝
    32.69s  user  발화 시작: 아, 그렇구나. 그럼 빌리 밥 손튼 앨범 좀 찾아볼까?
    32.70s  agent 발화 끝
    35.71s  <ret> 발화 (turn10 첫 프레임)
    36.10s  agent 발화 시작: <ret> 빌리 밥 손튼의 앨범 중 "Private Parts"가 천구백구십육년에 발매되었어요.
    36.11s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.05s]: (tool result) Billy Bob Thornton - Private Parts (1996)
    36.21s  user  발화 끝
    41.15s  agent 발화 끝
