# v3_rag_25_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_25",
#     "name": "하온",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-09-25",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-09-17",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-08-25",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-07-20",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2025-06-24",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-03",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 혹시 마사 그레이엄에 대해 아세요? | S2 천팔백구십사년이라니, 엄청 오래전이네요. | S3 독특하다니, 어떤 점이 독특한데요? | S4 와, 정말 대단한 사람이었네요.

     0.00s  user  발화 시작: 안녕하세요, 혹시 마사 그레이엄에 대해 아세요?
     3.00s  agent 발화 시작: 안녕하세요. 마사 그레이엄은 미국의 모던 댄서이자 안무가였습니다.
     3.00s  user  발화 끝
     6.49s  user  발화 시작: 네네.
     6.49s  agent 발화 끝
     6.99s  user  발화 시작: 아, 모던 댄스요? 그게 뭔데요?
     6.99s  user  발화 끝
     9.49s  agent 발화 시작: 모던 댄스는 전통적인 발레의 틀에서 벗어나 자유로운 움직임을 추구하는 춤입니다.
     9.49s  user  발화 끝
    14.48s  user  발화 시작: 그렇군요. 마사 그레이엄은 어떤 스타일의 춤을 췄나요?
    14.48s  agent 발화 끝
    17.90s  <ret> 발화 (turn6 첫 프레임)
    17.98s  agent 발화 시작: <ret> 마사 그레이엄은 미국의 춤을 완전히 바꾸었고, 그녀의 기법은 —
    17.98s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.50s]: Martha Graham reshaped American dance and is still taught worldwide, a
    17.98s  user  발화 끝
    22.48s  user  발화 시작: …그 기법이 지금도 배우는 사람들이 있어요?
    22.48s  agent 발화 끝
    25.47s  agent 발화 시작: 네, 그녀의 기법은 전 세계적으로 여전히 가르쳐지고 있습니다.
    25.47s  user  발화 끝
    29.47s  user  발화 시작: 오, 정말 대단하네요. 마사 그레이엄은 언제 태어났나요?
    29.47s  agent 발화 끝
    32.80s  <ret> 발화 (turn10 첫 프레임)
    32.96s  agent 발화 시작: <ret> 그녀는 천팔백구십사년 오월 십일일에 태어났습니다.
    32.96s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.50s]: Martha Graham was born on May 11, 1894.
    32.96s  user  발화 끝
    35.46s  user  발화 시작: 천팔백구십사년이라니, 엄청 오래전이네요.
    35.46s  agent 발화 끝
    36.96s  agent 발화 시작: 네, 꽤 오래전이죠. 그 시대에는 춤에 대한 인식이 지금과는 달랐을 거예요.
    36.96s  user  발화 끝
    42.45s  user  발화 시작: 혹시 마사 그레이엄이 만든 작품 중에 유명한 게 있을까요?
    42.45s  agent 발화 끝
    46.95s  agent 발화 시작: 그녀의 작품은 매우 많지만, 'Lamentation'이 특히 유명합니다.
    46.95s  user  발화 끝
    50.44s  user  발화 시작: Lamentation요? 그건 어떤 춤인가요?
    50.44s  agent 발화 끝
    52.44s  agent 발화 시작: 'Lamentation'은 슬픔과 고통을 표현하는 추상적인 솔로 춤입니다.
    52.44s  user  발화 끝
    55.94s  user  발화 시작: 네.
    55.94s  agent 발화 끝
    56.44s  agent 발화 시작: 춤을 통해 인간의 깊은 감정을 표현하려고 노력했습니다.
    56.44s  user  발화 끝
    59.93s  user  발화 시작: 네.
    59.93s  agent 발화 끝
    60.43s  user  발화 시작: 마사 그레이엄의 춤은 다른 춤들과 어떤 점이 다른가요?
    60.43s  user  발화 끝
    64.03s  <ret> 발화 (turn21 첫 프레임)
    64.43s  agent 발화 시작: <ret> 그레이엄 기법은 마사 그레이엄이 창안한 독특한 모던 댄스 운동 스타일이자 교육법입니다.
    64.43s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.49s]: The Graham technique is a modern dance movement style and pedagogy cre
    64.43s  user  발화 끝
    69.92s  user  발화 시작: 네.
    69.92s  agent 발화 끝
    70.42s  user  발화 시작: 독특하다니, 어떤 점이 독특한데요?
    70.42s  user  발화 끝
    72.42s  agent 발화 시작: 그녀의 기법은 수축과 이완, 땅에 대한 연결, 그리고 감정의 표현에 중점을 둡니다.
    72.42s  user  발화 끝
    78.41s  user  발화 시작: 수축과 이완이라… 좀 더 자세히 설명해 주실 수 있나요?
    78.41s  agent 발화 끝
    82.91s  agent 발화 시작: 수축은 몸을 안으로 굽히는 동작이고, 이완은 몸을 풀어주는 동작입니다.
    82.91s  user  발화 끝
    87.40s  user  발화 시작: 아, 이해했어요. 마치 숨을 쉬는 것과 비슷하네요.
    87.40s  agent 발화 끝
    90.90s  agent 발화 시작: 네, 맞아요. 호흡과 움직임이 긴밀하게 연결되어 있습니다.
    90.90s  user  발화 끝
    94.40s  user  발화 시작: 마사 그레이엄의 춤은 현대 춤에 어떤 영향을 미쳤나요?
    94.40s  agent 발화 끝
    98.39s  agent 발화 시작: 그녀의 춤은 미국 춤의 지형을 완전히 바꿔 놓았다고 평가받고 있습니다.
    98.39s  user  발화 끝
   103.39s  user  발화 시작: 와, 정말 대단한 사람이었네요.
   103.39s  agent 발화 끝
   105.38s  agent 발화 시작: 네, 그녀는 춤 역사에 큰 발자취를 남겼습니다.
   105.38s  user  발화 끝
   108.88s  user  발화 시작: 혹시 마사 그레이엄의 춤을 볼 수 있는 곳이 있을까요?
   108.88s  agent 발화 끝
   113.38s  agent 발화 시작: 지금은 라이브 공연을 찾기 어렵지만, 영상 자료는 많이 있습니다.
   113.38s  user  발화 끝
   117.87s  user  발화 시작: 그렇죠.
   117.87s  agent 발화 끝
   118.37s  user  발화 시작: 영상 자료요? 어디서 찾아볼 수 있을까요?
   118.37s  user  발화 끝
   121.37s  agent 발화 시작: 유튜브나 Vimeo 같은 영상 공유 사이트에서 찾아보실 수 있습니다.
   121.37s  user  발화 끝
   125.86s  user  발화 시작: 알겠습니다. 한번 찾아봐야겠네요. 감사합니다.
   125.86s  agent 발화 끝
   127.86s  agent 발화 시작: 천만에요. 도움이 되었다니 기쁩니다.
   127.86s  user  발화 끝
   129.86s  agent 발화 끝
