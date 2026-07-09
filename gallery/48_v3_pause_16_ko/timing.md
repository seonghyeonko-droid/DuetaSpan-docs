# v3_pause_16_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 음, 디스토피아 소설 읽다가 그런 생각을 해 봤어.
     3.06s  <ret> 발화 (turn1 첫 프레임)
     3.13s  user  발화 끝
     3.30s  agent 발화 시작: <ret> 그건 정말 흥미로운 분야지… 조지 오웰의 *1984년*, 천구백사십구 년에 출판됐잖아, 그 용어가
     5.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.76s]: <Nineteen Eighty-Four is a dystopian novel published in 1949, written 
    12.07s  agent 발화 끝
    12.50s  user  발화 시작: 그런데 오웰은 “빅 브라더” 아이디어를 어디서 얻은 거야? 너무 음산하게 느껴져서.
    18.76s  agent 발화 시작: 정말 인상적인 문구지, 그렇지?
    18.80s  user  발화 끝
    20.74s  agent 발화 끝
    21.30s  user  발화 시작: 역사적인 맥락이 궁금해. 혹시 실존 인물에서 영감을 받은 거야?
    25.76s  <ret> 발화 (turn5 첫 프레임)
    25.92s  agent 발화 시작: <ret> 그 기원에 대한 질문은 정말 좋은 질문이야… 오웰 자신은 어릴 때 봤던 포스터, “네가 감시당하고
    26.02s  user  발화 끝
    26.26s  ⚡SPAN 주입 [d'=0.50s / d_lead=2.98s]: <Orwell stated the concept came from a childhood memory of posters dep
    30.23s  user  발화 시작: 맞아요.
    30.87s  user  발화 끝
    34.87s  agent 발화 끝
    35.76s  user  발화 시작: 그럼 정치 지도자 같은 사람은 아니었어?
    37.87s  user  발화 끝
    37.92s  agent 발화 시작: 직접적으로는 아니야. 어디에나 존재하는 감시라는 느낌이었어.
    43.38s  agent 발화 끝
    43.44s  user  발화 시작: 그런데 스페인 내전은…
    44.96s  user  발화 끝
    45.36s  user  발화 시작: …그것과 관련이 있었던 것 같아?
    46.82s  agent 발화 시작: 네 말이 맞아—
    47.01s  user  발화 끝
    47.17s  user  발화 시작: 그는 그 전쟁에 참여했잖아, 그리고 그것은 선전과 통제에 관한 것이었지…
    47.88s  agent 발화 끝
    52.12s  user  발화 끝
    52.51s  agent 발화 시작: 스페인 내전은 오웰에게 큰 영향을 줬어. 그는 선전과 감시가 사용되는 것을 직접 목격했거든.
    59.42s  user  발화 시작: 알겠어. 그럼 “빅 브라더”라는 인물은 한 사람이 아니라 시스템을 의미하는 거야?
    59.42s  agent 발화 끝
    63.84s  agent 발화 시작: 맞아. 한 개인보다는 모든 것을 꿰뚫어 보는 국가를 상징하는 거지.
    63.85s  user  발화 끝
    67.63s  agent 발화 끝
    67.89s  user  발화 시작: 음. 그 말이 정말 와닿네. 그 책은 처음부터 인기를 얻었어?
    71.89s  <ret> 발화 (turn17 첫 프레임)
    72.13s  agent 발화 시작: <ret> 처음 반응은… 복잡했어… 처음에는 평가가 엇갈렸지만, 냉전 시대에 판매량이 늘면서 매우 영향력 있
    72.34s  user  발화 끝
    73.01s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.37s]: <Initially, *Nineteen Eighty-Four* received mixed reviews, but its sal
    76.76s  user  발화 시작: 아.
    77.39s  user  발화 끝
    81.03s  user  발화 시작: 냉전 시대에는 그 책의 주제가 정말 와닿았을 것 같아.
    81.04s  agent 발화 끝
    84.37s  agent 발화 시작: 정말 그래. 그 시대의 불안감이 메시지를 훨씬 더 증폭시켰지.
    84.40s  user  발화 끝
    88.40s  agent 발화 끝
