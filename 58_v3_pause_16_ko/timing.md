# v3_pause_16_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "성준",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-27",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-02-06",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 해운대로 570."
#     },
#     {
#       "date": "2025-10-25",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-07-06",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2025-05-27",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in December."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-01",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 비단 위원회에 가입하려면 최소 몇 살이 되어야 해? | S2 오, 알았어. 홈페이지에서 신청서를 다운로드받으면 되는 거네? | S3 … 혹시 이번 주 토요일에… | S4 칠월 십오일까지라… 시간이 얼마 없네.

     0.00s  user  발화 시작: 비단 위원회에 가입하려면 최소 몇 살이 되어야 해?
     3.96s  <ret> 발화 (turn1 첫 프레임)
     4.36s  agent 발화 시작: <ret> 비단 위원회에 가입하려면 최소 삼십세여야 합니다.
     4.36s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.27s]: The minimum age limit for membership of vidhan parishad is 30 years ol
     4.36s  user  발화 끝
     7.62s  user  발화 시작: 와.
     7.62s  agent 발화 끝
     8.17s  user  발화 시작: 음, 그럼 위원회는 정확히 뭘 하는 곳인데?
     8.17s  user  발화 끝
    11.98s  agent 발화 시작: 비단 위원회는 지역 사회 발전을 위한 다양한 활동을 지원하는 곳입니다.
    11.98s  user  발화 끝
    17.43s  user  발화 시작: 아, 그렇구나. 그럼 위원회에 가입하려면 어떻게 해야 돼?
    17.43s  agent 발화 끝
    21.62s  <ret> 발화 (turn6 첫 프레임)
    21.78s  agent 발화 시작: <ret> 비단 위원회에 가입하려면 신청서와 필요한 서류를 제출해야 합니다. 자세한 내용은 위원회 홈페이지에
    21.78s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.17s]: To become a member of the vidhan parishad, one must submit an applicat
    21.78s  user  발화 끝
    29.95s  user  발화 시작: 응.
    29.95s  agent 발화 끝
    30.50s  user  발화 시작: 홈페이지는 어디에 있어?
    30.50s  user  발화 끝
    31.97s  <ret> 발화 (turn9 첫 프레임)
    32.13s  agent 발화 시작: <ret> 비단 위원회 홈페이지는 www.vidhanparishad.gov.in 입니다. 가입 정보와 활동 
    32.13s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.08s]: (tool result) The official website of the vidhan parishad is www.vidha
    32.13s  user  발화 끝
    39.21s  user  발화 시작: 오, 알았어. 홈페이지에서 신청서를 다운로드받으면 되는 거네?
    39.21s  agent 발화 끝
    43.02s  agent 발화 시작: 네, 맞습니다. 홈페이지에서 신청서를 다운로드하여 작성하신 후 제출하시면 됩니다.
    43.02s  user  발화 끝
    47.92s  user  발화 시작: 혹시 위원회 활동에 참여하려면 꼭 가입해야 하는 거야?
    47.92s  agent 발화 끝
    52.28s  agent 발화 시작: 네.
    52.28s  user  발화 끝
    52.82s  agent 발화 시작: 꼭 가입해야 하는 것은 아니지만, 회원으로 가입하시면 다양한 활동에 더 쉽게 참여하실 수 있습니다.
    52.82s  agent 발화 끝
    60.45s  user  발화 시작: 음… 그렇다면, 위원회에서 현재 진행 중인 활동이 뭐가 있어?
    60.45s  agent 발화 끝
    65.35s  agent 발화 시작: 네.
    65.35s  user  발화 끝
    65.81s  <ret> 발화 (turn17 첫 프레임)
    65.89s  agent 발화 시작: <ret> 비단 위원회는 현재 환경 보호와 청년 역량 강화를 위한 지역 사회 봉사 프로그램을 진행하고 있습니
    65.89s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.44s]: (tool result) The vidhan parishad is currently running a community out
    65.89s  agent 발화 끝
    77.33s  user  발화 시작: 환경 보호 프로그램이라… 어떤 식으로 진행되는 거야? —
    77.33s  agent 발화 끝
    81.69s  user  발화 시작: … 혹시 이번 주 토요일에…
    81.69s  user  발화 끝
    84.41s  user  발화 시작: …참여할 수 있는 봉사활동이 있을까?
    84.41s  user  발화 끝
    87.13s  agent 발화 시작: 네.
    87.13s  user  발화 끝
    87.68s  agent 발화 시작: 이번 주 토요일에는 강변 정화 활동이 예정되어 있습니다. 참여를 원하시면 신청서를 작성해 주셔야 합니다.
    87.68s  agent 발화 끝
    95.30s  user  발화 시작: 어.
    95.30s  agent 발화 끝
    95.85s  user  발화 시작: 아, 좋네. 그럼 신청서는…
    95.85s  user  발화 끝
    98.02s  user  발화 시작: …지금 바로 할 수 있어?
    98.02s  user  발화 끝
   100.43s  <ret> 발화 (turn26 첫 프레임)
   100.75s  agent 발화 시작: <ret> 환경 보호 프로그램 신청서는 비단 위원회 홈페이지에서 이천이십육년 칠월 십오일까지 온라인으로 제출
   100.75s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.62s]: The application form for the environmental conservation program can be
   100.75s  user  발화 끝
   108.37s  user  발화 시작: 칠월 십오일까지라… 시간이 얼마 없네.
   108.37s  agent 발화 끝
   111.09s  agent 발화 시작: 네, 시간 여유가 많지 않으니 서둘러 신청하시는 것이 좋겠습니다.
   111.09s  user  발화 끝
   116.00s  user  발화 시작: 응.
   116.00s  agent 발화 끝
   116.54s  user  발화 시작: 그럼, 혹시 봉사활동 때 필요한 준비물이 있을까?
   116.54s  user  발화 끝
   120.35s  agent 발화 시작: 편안한 복장과 개인 물통을 준비해 오시면 됩니다. 위원회에서 장갑과 쓰레기 봉투를 제공해 드립니다.
   120.35s  user  발화 끝
   127.43s  user  발화 시작: 아.
   127.43s  agent 발화 끝
   127.98s  user  발화 시작: 알았어. 고마워, 주나라. 덕분에 잘 알게 됐어.
   127.98s  user  발화 끝
   131.79s  agent 발화 시작: 천만에요. 도움이 되었다니 기쁩니다.
   131.79s  user  발화 끝
   133.97s  agent 발화 끝
