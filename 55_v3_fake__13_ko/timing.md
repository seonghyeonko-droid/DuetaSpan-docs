# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 데미 로바토 새 앨범 언제 나와? 2015년 기준으로. | S2 Confidence, 멋진 제목이네. | S3 잠깐만, 근데 그 앨범에 제일 인기 있는 노래는 뭐야? | S4 좋아, 알았어. 뭔가 다시 힘이 나는 것 같아. 고마워, 루나

     0.00s  user  발화 시작: 데미 로바토 새 앨범 언제 나와? 2015년 기준으로.
     3.52s  user  발화 끝
     3.62s  <ret> 발화 (turn1 첫 프레임)
     3.78s  agent 발화 시작: <ret> 음, 2015년에 새 앨범을 냈었지. 잠깐만, 확인해 볼게.
     5.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.37s]: October 2015.
     8.96s  agent 발화 시작: 데미 로바토의 새 앨범은 2015년 10월에 발매됐어.
     9.15s  agent 발화 끝
    12.47s  agent 발화 끝
    12.52s  user  발화 시작: 아, 10월이구나. 그 앨범 제목이 뭐였지?
    15.39s  <ret> 발화 (turn4 첫 프레임)
    15.63s  agent 발화 시작: <ret> 앨범 제목은… 잠깐만.
    15.66s  user  발화 끝
    16.67s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.45s]: Demi Lovato released her fifth studio album, Confidence, on October 16
    17.94s  agent 발화 시작: 데미 로바토의 다섯 번째 스튜디오 앨범 제목은 'Confidence'야. 2015년 10월 16일에 발매됐어
    18.08s  agent 발화 끝
    25.16s  agent 발화 끝
    25.47s  user  발화 시작: Confidence, 멋진 제목이네.
    28.05s  user  발화 끝
    28.57s  agent 발화 시작: 그렇지, 자신감을 북돋아주는 제목이잖아. [happy] 요즘 좀 힘든 일이 있어?
    33.20s  agent 발화 끝
    33.34s  user  발화 시작: 사실 좀 그래… 요즘 노래 만들기가 너무 안 돼.
    36.83s  <ret> 발화 (turn9 첫 프레임)
    37.14s  agent 발화 시작: <ret> 아, 창작의 고통을 겪고 있구나. 흔히 있는 일이야.
    37.18s  user  발화 끝
    38.75s  ⚡SPAN 주입(IRRELEVANT) [d'=1.92s / d_lead=4.17s]: The population of Tokyo is approximately 14 million people.
    41.10s  agent 발화 시작: 네 마음속에 갇힌 영감을 풀어내는 방법을 찾아보자. —
    41.30s  agent 발화 끝
    44.24s  user  발화 시작: 잠깐만, 근데 그 앨범에 제일 인기 있는 노래는 뭐야?
    44.88s  agent 발화 끝
    47.64s  <ret> 발화 (turn12 첫 프레임)
    47.89s  user  발화 끝
    47.95s  agent 발화 시작: <ret> 그 앨범에서 가장 인기 있는 노래는 'Cool for the Summer'였어.
    49.08s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.98s]: “Cool for the Summer” was released as the lead single from Confidence 
    51.78s  agent 발화 시작: 'Cool for the Summer'가 2015년 7월 1일에 선공개됐고, 엄청난 인기를 얻었지.
    51.93s  agent 발화 끝
    53.76s  user  발화 시작: Mm-hmm.
    54.26s  user  발화 끝
    57.14s  agent 발화 시작: 그 노래가 너에게도 영감을 줄 수 있을지도 몰라. 가사를 한번 들어봐.
    57.20s  agent 발화 끝
    61.64s  user  발화 시작: 가사도 찾아봐야겠다. 혹시 뮤직비디오도 좋아?
    61.91s  agent 발화 끝
    65.20s  user  발화 끝
    65.49s  agent 발화 시작: 뮤직비디오도 꽤 스타일리시했어. 영상미가 돋보였지.
    69.71s  agent 발화 끝
    69.88s  user  발화 시작: 좋아, 알았어. 뭔가 다시 힘이 나는 것 같아. 고마워, 루나나.
    74.97s  agent 발화 시작: 천만에. 네 안에는 이미 충분한 가능성이 있어. 자신감을 가져!
    75.02s  user  발화 끝
    79.59s  agent 발화 끝
